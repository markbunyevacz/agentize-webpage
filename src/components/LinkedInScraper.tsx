import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, ExternalLink, Building2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface CompanyInfo {
  name: string;
  description: string;
  industry: string;
  location: string;
  followers: string;
  about: string;
  logoUrl: string;
}

export const LinkedInScraper = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  const handleScrape = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a LinkedIn company URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('scrape-linkedin', {
        body: { url }
      });

      if (error) throw error;

      if (data.success && data.companyInfo) {
        setCompanyInfo(data.companyInfo);
        toast({
          title: "Success",
          description: "LinkedIn profile scraped successfully!",
        });
      } else {
        throw new Error('Failed to scrape LinkedIn profile');
      }
    } catch (error) {
      console.error('Error scraping LinkedIn:', error);
      toast({
        title: "Error",
        description: "Failed to scrape LinkedIn profile. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            LinkedIn Company Profile Scraper
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="https://www.linkedin.com/company/your-company"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleScrape} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scraping...
                </>
              ) : (
                'Scrape Profile'
              )}
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Enter a LinkedIn company profile URL to extract company information for branding purposes.
          </p>
        </CardContent>
      </Card>

      {companyInfo && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Company Information
              <ExternalLink className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">Company Name</h4>
                <p className="text-lg font-medium">{companyInfo.name || 'Not found'}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">Industry</h4>
                <p>{companyInfo.industry || 'Not specified'}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">Location</h4>
                <p>{companyInfo.location || 'Not specified'}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">Followers</h4>
                <p>{companyInfo.followers || 'Not available'}</p>
              </div>
            </div>
            
            {companyInfo.about && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">About</h4>
                <p className="text-sm leading-relaxed bg-muted p-3 rounded-md">
                  {companyInfo.about}
                </p>
              </div>
            )}
            
            {companyInfo.logoUrl && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Logo</h4>
                <img 
                  src={companyInfo.logoUrl} 
                  alt="Company Logo" 
                  className="max-w-32 h-auto border rounded"
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};