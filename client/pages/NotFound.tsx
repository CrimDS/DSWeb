import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f1419' }}>
      <Header />
      <div className="pt-32 flex items-center justify-center min-h-[calc(100vh-128px)] px-4">
        <div className="text-center">
          <h1 className="text-7xl sm:text-8xl font-bold mb-4 font-mono" style={{ color: '#22d3ee', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
            404
          </h1>
          <p className="text-xl mb-2 font-mono" style={{ color: '#b3bac3' }}>SIGNAL LOST</p>
          <p className="mb-8 max-w-md" style={{ color: '#808b95' }}>
            This sector of the void has collapsed into non-existence. The signal you're searching for cannot be found.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-lg font-mono uppercase text-sm tracking-wider group transition-all"
            style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #06b6d4)', color: '#0f1419', boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
