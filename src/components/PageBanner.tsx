import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import heroBackground from "@/assets/hero-background.jpg";

interface PageBannerProps {
  title: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => {
  return (
    <section className="relative min-h-[320px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-navy-foreground mb-4 font-poppins">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <Breadcrumb className="flex justify-center">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink asChild>
                      <Link to={crumb.href} className="text-navy-foreground hover:text-navy-foreground/80">
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-navy-foreground">
                      {crumb.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="text-navy-foreground" />
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default PageBanner;
