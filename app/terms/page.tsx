export default function TermsPage() {
  return (
    <div className="container py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using Radius software and services, you accept and agree to be bound by the terms and
            provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily download one copy of Radius software per license for personal,
            non-commercial transitory viewing only.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>This is the grant of a license, not a transfer of title</li>
            <li>Under this license you may not modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained in Radius</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on Radius are provided on an 'as is' basis. Radius makes no warranties, expressed or implied,
            and hereby disclaims and negates all other warranties including without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall Radius or its suppliers be liable for any damages (including, without limitation, damages
            for loss of data or profit, or due to business interruption) arising out of the use or inability to use
            Radius software, even if Radius or a Radius authorized representative has been notified orally or in writing
            of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
          <p className="text-muted-foreground">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
            information when you use our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
            submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please contact us at support@radius.com
          </p>
        </section>
      </div>
    </div>
  )
}
