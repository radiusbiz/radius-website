"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadCloud, AlertTriangle } from "lucide-react";
import { useAuth } from "@/lib/firebase/authContext";
import Link from "next/link";

const allProducts = [
  {
    id: "fortnite-enhancer",
    name: "Fortnite Enhancer",
    licenseType: "fortnite",
    version: "v4.2.1",
    releaseDate: "May 28, 2025",
    description: "Advanced enhancement features specifically designed for Fortnite. Includes aim assistance, ESP, and building assistance.",
    downloadLink: "/downloads/fortnite-enhancer-v4.2.1.zip",
  },
  {
    id: "rust-enhancer",
    name: "Rust Enhancer",
    licenseType: "rust",
    version: "v3.5.0",
    releaseDate: "May 20, 2025",
    description: "Survival advantage tools for Rust gameplay. Features player ESP, item detection, and aim enhancement.",
    downloadLink: "/downloads/rust-enhancer-v3.5.0.zip",
  },
  {
    id: "hwid-spoofer",
    name: "HWID Spoofer",
    licenseType: "spoofer",
    version: "v2.1.0",
    releaseDate: "April 15, 2025",
    description: "Utility tool for game modifications. Safely and easily modify your HWID with instant activation.",
    downloadLink: "/downloads/hwid-spoofer-v2.1.0.zip",
  },
];

export default function DownloadsPage() {
  const { userProfile, loading } = useAuth();

  if (loading) {
    return <p className="text-center py-10">Loading your downloads...</p>;
  }

  const userLicenseType = userProfile?.licenseType;
  const availableDownloads = userLicenseType 
    ? allProducts.filter(p => p.licenseType === userLicenseType)
    : [];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Your Downloads</h1>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>

      {availableDownloads.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {availableDownloads.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{product.name}</CardTitle>
                  <DownloadCloud className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardDescription>
                  Version {product.version} (Released: {product.releaseDate})
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground h-20 overflow-hidden">
                  {product.description}
                </p>
                <Button className="w-full" asChild>
                  <a href={product.downloadLink} download>
                    <DownloadCloud className="mr-2 h-4 w-4" />
                    Download Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-10">
          <CardHeader>
            <div className="flex flex-col items-center justify-center">
                <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                <CardTitle>No Downloads Available</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You currently do not have an active license for any of our products, or your license type is not recognized.
            </p>
            <p className="text-muted-foreground mt-2">
              Please visit our <Link href="/pricing" className="underline hover:text-primary">pricing page</Link> to purchase a license.
            </p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            Ensure you have disabled any antivirus software before downloading or running our tools, as they may be falsely flagged.
          </p>
          <p>
            All downloads are scanned and verified to be safe. If you encounter any issues, please contact our support team.
          </p>
          <p>
            By downloading and using our software, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 