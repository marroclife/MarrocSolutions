import React, { useEffect } from "react";
import { withUTM } from "@/lib/links";

export const HotmartButton: React.FC<{ url: string; utm?: Record<string, string> }> = ({ url, utm }) => {
  useEffect(() => {
    const importHotmart = () => {
      const script = document.createElement("script");
      script.src = "https://static.hotmart.com/checkout/widget.min.js";
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
      document.head.appendChild(link);
    };

    importHotmart();
  }, []);

  const urlWithUTM = withUTM(url, utm);

  return (
    <a
      href={urlWithUTM}
      className="hotmart-fb hotmart__button-checkout"
      target="_blank"
      rel="noreferrer"
    >
      Comprar Agora
    </a>
  );
};