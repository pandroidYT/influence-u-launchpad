import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-2xl text-blue-900 mb-6">Oops! Page not found</p>
        <p className="text-lg text-blue-700 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </Button>
      </section>
    </Layout>
  );
};

export default NotFound;
