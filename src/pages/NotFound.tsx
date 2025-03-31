
import React from 'react';
import { Link } from 'react-router-dom';
import { ChristmasLights } from '@/components/ChristmasLights';
import { SnowflakeEffect } from '@/components/SnowflakeEffect';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-christmas-background">
      <SnowflakeEffect />
      <ChristmasLights />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-kaushan text-christmas-red mb-4">404</h1>
          <p className="text-2xl font-bold mb-6">Oh no! The bears can't find this page</p>
          <p className="text-lg mb-8">
            This page seems to be hibernating. Let's head back home to continue the Christmas celebration!
          </p>
          
          <Link to="/">
            <Button className="bg-christmas-green hover:bg-christmas-red text-white transition-colors duration-300">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <ChristmasLights />
      <footer className="py-6 text-center bg-christmas-dark text-white">
        <p>© {new Date().getFullYear()} A Very Beary Christmas</p>
        <p className="text-sm mt-1">All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default NotFound;
