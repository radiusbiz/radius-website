"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Users, Activity, BarChart3, ShieldCheck } from "lucide-react"
import Link from "next/link"
import withAuth from "@/lib/firebase/withAuth"
import { useAuth } from "@/lib/firebase/authContext"

function DashboardPage() {
  const { userProfile, loading } = useAuth();

  let licenseDisplayName = "N/A";
  if (userProfile?.licenseType) {
    switch (userProfile.licenseType) {
      case "fortnite":
        licenseDisplayName = "Fortnite Enhancer";
        break;
      case "rust":
        licenseDisplayName = "Rust Enhancer";
        break;
      case "spoofer":
        licenseDisplayName = "HWID Spoofer";
        break;
      default:
        licenseDisplayName = userProfile.licenseType;
    }
  }

  let licenseLengthDisplayName = "N/A";
  if (userProfile?.licenseLength) {
    switch (userProfile.licenseLength) {
      case "weekly":
        licenseLengthDisplayName = "Weekly";
        break;
      case "monthly":
        licenseLengthDisplayName = "Monthly";
        break;
      case "lifetime":
        licenseLengthDisplayName = "Lifetime";
        break;
      default:
        licenseLengthDisplayName = userProfile.licenseLength;
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/dashboard/downloads">
            <Download className="mr-2 h-4 w-4" /> View My Downloads
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">License Status</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-2xl font-bold">Loading...</div>
            ) : userProfile?.licenseType ? (
              <>
                <div className="text-2xl font-bold text-primary">{licenseDisplayName}</div>
                <p className="text-xs text-muted-foreground">Type: {licenseLengthDisplayName}</p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold text-destructive">No Active License</div>
                <p className="text-xs text-muted-foreground">
                    Visit <Link href="/pricing" className="underline">pricing</Link> to get started.
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userProfile?.licenseLength === 'lifetime' ? 'N/A (Lifetime)' : 'June 15, 2025'}</div>
            <p className="text-xs text-muted-foreground">{userProfile?.licenseLength === 'lifetime' ? '' : '$XX.XX/term'}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1/3</div>
            <p className="text-xs text-muted-foreground">Devices connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Software Version</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">vX.X.X</div>
            <p className="text-xs text-muted-foreground">Up to date</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Latest changes and improvements to Radius software</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium">Version X.X.X</h3>
                  <span className="text-xs text-muted-foreground">Date</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  General updates or updates specific to your licensed product.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your account and devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/dashboard/settings">Account Settings</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/dashboard/devices">Manage Devices</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/support">Get Support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default withAuth(DashboardPage)
