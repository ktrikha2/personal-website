import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Resume',
  description: `View and download ${siteConfig.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
          <p className="text-neutral-400 mb-6">
            Download my resume or view it below.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a href={siteConfig.links.resume} download>
              Download PDF
            </a>
          </Button>
        </div>

        {/* PDF Embed */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src={`${siteConfig.links.resume}#view=FitH`}
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>

        {/* Fallback message */}
        <p className="text-center text-neutral-500 text-sm mt-4">
          If the PDF doesn&apos;t load, you can{' '}
          <a
            href={siteConfig.links.resume}
            className="text-red-400 hover:underline"
            download
          >
            download it directly
          </a>
          .
        </p>
      </div>
    </main>
  );
}
