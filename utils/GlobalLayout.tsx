"use client";
import Navbar from "@/components/ReusableComp/Navbar";
import { ThemeProvider } from "@/components/ReusableComp/theme-provider";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {

  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default GlobalLayout;
