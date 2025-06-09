import { CheckCircle, AlertTriangle } from "lucide-react";

export default function StatusPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background overlays for seamless effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-lg w-full p-8 rounded-xl border border-muted/50 bg-card/50 backdrop-blur-sm shadow-lg text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
          <h1 className="text-3xl font-bold mb-2">All Systems Operational</h1>
          <p className="text-muted-foreground mb-6">
            All Radius services are running smoothly. If you are experiencing issues, please check back here for updates or contact support.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm">
              <span className="font-medium">API</span>
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-5 w-5" /> Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm">
              <span className="font-medium">Auth</span>
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-5 w-5" /> Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm">
              <span className="font-medium">Downloads</span>
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-5 w-5" /> Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm">
              <span className="font-medium">Fortnite Enhancer</span>
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-5 w-5" /> Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm">
              <span className="font-medium">HWID Spoofer</span>
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-5 w-5" /> Operational
              </span>
            </div>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
} 