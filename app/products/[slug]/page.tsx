"use client";

import Link from "next/link"
import { notFound, useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Shield, Zap, Settings, Volume2, VolumeX, Maximize, PlayCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/firebase/authContext"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import React, { useRef } from "react"

interface PricingOption {
  id: string;
  duration: string;
  price: string;
  popular: boolean;
  licenseLengthValue: string;
  priceNumeric: number;
  variantId: string;
}

interface ProductDetail {
  name: string;
  description: string;
  pricing: PricingOption[];
  features: string[];
  details: string;
  requirements: string;
  licenseType: string;
}

interface ProductsData {
  [key: string]: ProductDetail;
}

const products: ProductsData = {
  "fortnite-enhancer": {
    name: "Fortnite Enhancer",
    licenseType: "fortnite",
    description: "Advanced enhancement features specifically designed for Fortnite",
    pricing: [
      {
        id: "fortnite-1d",
        duration: "1 Day",
        price: "£6.99",
        priceNumeric: 6.99,
        popular: false,
        licenseLengthValue: "1d",
        variantId: "51517644341512"
      },
      {
        id: "fortnite-1w",
        duration: "1 Week",
        price: "£18.99",
        priceNumeric: 18.99,
        popular: true,
        licenseLengthValue: "1w",
        variantId: "51517644374280"
      },
      {
        id: "fortnite-1m",
        duration: "1 Month",
        price: "£34.99",
        priceNumeric: 34.99,
        popular: false,
        licenseLengthValue: "1m",
        variantId: "51517644407048"
      },
      {
        id: "fortnite-lifetime",
        duration: "Lifetime",
        price: "£79.99",
        priceNumeric: 79.99,
        popular: false,
        licenseLengthValue: "lifetime",
        variantId: "51517644439816"
      }
    ],
    features: [
      "Aim assistance",
      "ESP visualization",
      "Building assistance",
      "Undetected gameplay",
      "Regular updates",
      "24/7 Support"
    ],
    details:
      "Our Fortnite Enhancer is specifically designed for Battle Royale gameplay. With advanced aim assistance, ESP features, and building enhancements, you'll have the competitive edge needed to secure more Victory Royales. The software includes sophisticated anti-detection measures to keep your account safe.",
    requirements: "Windows 10/11 64-bit, 8GB RAM, 4GB free disk space, DirectX 11 compatible graphics card",
  },
  "rust-enhancer": {
    name: "Rust Enhancer (Coming Soon)",
    licenseType: "rust",
    description: "Survival advantage tools for Rust gameplay - Coming Soon!",
    pricing: [],
    features: [
      "Player ESP with distance indicators",
      "Item and resource detection",
      "Advanced aim enhancement system",
      "Raid assistance tools",
      "Animal and helicopter detection",
      "Safe zone and radiation warnings",
    ],
    details:
      "Coming Soon! Survive and thrive in the harsh world of Rust with our comprehensive enhancement suite. From spotting enemies at long range to finding valuable resources, our Rust Enhancer will give you the tools needed to dominate servers and build your empire.",
    requirements: "Windows 10/11 64-bit, 8GB RAM, 4GB free disk space, DirectX 11 compatible graphics card",
  },
  "number-changer": {
    name: "HWID Spoofer",
    licenseType: "spoofer",
    description: "Utility tool for game modifications",
    pricing: [
      {
        id: "spoofer-single",
        duration: "One-Time Use",
        price: "£4.99",
        priceNumeric: 4.99,
        popular: false,
        licenseLengthValue: "single",
        variantId: "51517670490376"
      },
      {
        id: "spoofer-lifetime",
        duration: "Lifetime",
        price: "£13.99",
        priceNumeric: 13.99,
        popular: true,
        licenseLengthValue: "lifetime",
        variantId: "51517670523144"
      }
    ],
    features: [
      "Easy HWID modification",
      "Safe and secure",
      "Instant activation",
      "Lifetime updates",
      "Multiple game support",
      "24/7 Support"
    ],
    details:
      "HWID Spoofer is a versatile utility tool designed for various game modifications. With its intuitive interface and robust functionality, you can safely modify game values while maintaining system stability and security.",
    requirements: "Windows 10/11 64-bit, 4GB RAM, 2GB free disk space",
  },
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();
  const { user } = useAuth();
  const product = products[slug as keyof typeof products]

  const [selectedPlan, setSelectedPlan] = useState<PricingOption | null>(null);

  useEffect(() => {
    if (product && product.pricing.length > 0) {
      const popularPlan = product.pricing.find(p => p.popular);
      if (popularPlan) {
        setSelectedPlan(popularPlan);
      } else {
        setSelectedPlan(product.pricing[0]);
      }
    }
  }, [product]);

  if (!product) {
    notFound()
  }

  const handleProceed = async () => {
    if (product && selectedPlan) {
      try {
        const response = await fetch('/api/create-checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user?.uid || 'guest',
            productId: slug,
            productName: product.name,
            licenseType: product.licenseType,
            licenseLength: selectedPlan.licenseLengthValue,
            price: selectedPlan.priceNumeric,
            currency: 'GBP',
            variantId: selectedPlan.variantId,
          }),
        });

        const data = await response.json();
        
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else {
          console.error('Checkout creation failed:', data);
          toast.error('Unable to create checkout. Please try again later.');
        }
      } catch (error) {
        console.error('Error creating checkout:', error);
        toast.error('An unexpected error occurred. Please try again later.');
      }
    } else {
      toast.error('Please select a plan to continue.');
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background overlays for seamless effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      
      <div className="relative z-10">
        <div className="container min-h-screen flex flex-col justify-center py-10">
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Link href="/">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{product.name}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{product.name}</h1>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start flex-1">
            <div className="lg:col-span-2">
              {/* Video player based on product */}
              {slug === "fortnite-enhancer" && <FortniteVideoPlayer />}
              {slug === "number-changer" && <SpooferVideoPlayer />}
              <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 border rounded-md mt-4 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Product Overview</h2>
                    <p>{product.details}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start gap-2">
                        <div className="rounded-full p-1 bg-primary/10">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Performance Optimized</h3>
                          <p className="text-sm text-muted-foreground">Minimal impact on your system resources</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full p-1 bg-primary/10">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Undetectable</h3>
                          <p className="text-sm text-muted-foreground">Advanced protection keeps you safe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="p-4 border rounded-md mt-4 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Key Features</h2>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="requirements" className="p-4 border rounded-md mt-4 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">System Requirements</h2>
                    <p>{product.requirements}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="sticky top-20">
              <Card className="bg-card/50 backdrop-blur-sm border-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {product.pricing.length > 0 ? "Choose Your Plan" : "Coming Soon"}
                  </CardTitle>
                  {product.pricing.length === 0 && (
                    <CardDescription>
                      This product is not yet available for purchase. Stay tuned for updates!
                    </CardDescription>
                  )}
                </CardHeader>
                {product.pricing.length > 0 ? (
                  <>
                    <CardContent className="pt-2 pb-6">
                      <RadioGroup
                        value={selectedPlan?.id}
                        onValueChange={(value) => {
                          const plan = product.pricing.find(p => p.id === value);
                          if (plan) setSelectedPlan(plan);
                        }}
                        className="space-y-3"
                      >
                        {product.pricing.map((plan) => (
                          <Label
                            key={plan.id}
                            htmlFor={plan.id}
                            className={`flex flex-col p-4 border rounded-md cursor-pointer hover:bg-accent/50 transition-colors duration-150
                                        ${selectedPlan?.id === plan.id 
                                          ? 'border-2 border-destructive bg-destructive/10'
                                          : 'border-muted'
                                        }`}
                          >
                            <div className="flex justify-between items-center w-full mb-1">
                              <span className="font-semibold text-md">{plan.duration}</span>
                              {plan.popular && (
                                <Badge variant="destructive" className="text-xs px-2 py-0.5">Popular</Badge>
                              )}
                            </div>
                            <span className="text-2xl font-bold">{plan.price}</span>
                            <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                          </Label>
                        ))}
                      </RadioGroup>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3 pt-0">
                      <Button 
                        className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground text-lg py-3"
                        size="lg"
                        onClick={handleProceed}
                        disabled={!selectedPlan}
                      >
                        {selectedPlan ? "Buy Now" : "Select a Plan"}
                      </Button>
                    </CardFooter>
                  </>
                ) : (
                  <CardFooter className="flex flex-col gap-3 pt-0">
                    <Button 
                      className="w-full bg-muted text-muted-foreground text-lg py-3"
                      size="lg"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </CardFooter>
                )}
              </Card>

              <Separator className="my-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FortniteVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [selectedMedia, setSelectedMedia] = useState(0)

  const mediaItems = [
    { type: 'video', src: '/demo-video.mp4', poster: '/images/demo-video-poster.png', title: 'Gameplay Overview' },
    { type: 'image', src: '/images/feature-1.jpg', title: 'ESP Features' },
    { type: 'image', src: '/images/feature-2.jpg', title: 'Aim Assistance' }
  ]

  const handleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="my-2 grid grid-cols-4 gap-4">
      {/* Main Video/Image Display */}
      <div className="col-span-3 relative aspect-[16/9] rounded-2xl overflow-hidden bg-black shadow-lg">
        {mediaItems[selectedMedia].type === 'video' ? (
          <>
            {/* Audio and fullscreen buttons */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <button onClick={handleMute} aria-label={isMuted ? "Unmute" : "Mute"} className="bg-black/80 text-white p-2 rounded-lg hover:bg-black/90 transition">
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <button
                className="bg-black/80 text-white p-2 rounded-lg hover:bg-black/90 transition"
                aria-label="Fullscreen"
                onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                    if (video.requestFullscreen) video.requestFullscreen();
                    else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                    else if ((video as any).msRequestFullscreen) (video as any).msRequestFullscreen();
                  }
                }}
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={false}
              muted={true}
              loop={true}
              autoPlay={true}
              playsInline={true}
              poster={mediaItems[selectedMedia].poster}
            >
              <source src={mediaItems[selectedMedia].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <img 
            src={mediaItems[selectedMedia].src} 
            alt={mediaItems[selectedMedia].title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="col-span-1 flex flex-col justify-between">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedMedia(index)}
            className={`relative aspect-[16/9] rounded-lg overflow-hidden transition-all ${
              selectedMedia === index 
                ? 'ring-2 ring-primary ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {item.type === 'video' ? (
              <video
                className="w-full h-full object-cover"
                poster={item.poster}
                muted
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-sm font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function SpooferVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [selectedMedia, setSelectedMedia] = useState(0)

  const mediaItems = [
    { type: 'video', src: '/spoofer-demo.mp4', poster: '/images/spoofer-poster.png', title: 'Software Demo' },
    { type: 'image', src: '/images/spoofer-1.jpg', title: 'HWID Protection' },
    { type: 'image', src: '/images/spoofer-2.jpg', title: 'Easy Setup' }
  ]

  const handleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="my-2 grid grid-cols-4 gap-4">
      {/* Main Video/Image Display */}
      <div className="col-span-3 relative aspect-[16/9] rounded-2xl overflow-hidden bg-black shadow-lg">
        {mediaItems[selectedMedia].type === 'video' ? (
          <>
            {/* Audio and fullscreen buttons */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <button onClick={handleMute} aria-label={isMuted ? "Unmute" : "Mute"} className="bg-black/80 text-white p-2 rounded-lg hover:bg-black/90 transition">
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <button
                className="bg-black/80 text-white p-2 rounded-lg hover:bg-black/90 transition"
                aria-label="Fullscreen"
                onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                    if (video.requestFullscreen) video.requestFullscreen();
                    else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                    else if ((video as any).msRequestFullscreen) (video as any).msRequestFullscreen();
                  }
                }}
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={false}
              muted={true}
              loop={true}
              autoPlay={true}
              playsInline={true}
              poster={mediaItems[selectedMedia].poster}
            >
              <source src={mediaItems[selectedMedia].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <img 
            src={mediaItems[selectedMedia].src} 
            alt={mediaItems[selectedMedia].title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="col-span-1 flex flex-col justify-between">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedMedia(index)}
            className={`relative aspect-[16/9] rounded-lg overflow-hidden transition-all ${
              selectedMedia === index 
                ? 'ring-2 ring-primary ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {item.type === 'video' ? (
              <video
                className="w-full h-full object-cover"
                poster={item.poster}
                muted
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-sm font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
