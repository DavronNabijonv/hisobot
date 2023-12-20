import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaComputer } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";
import himg from '../assets/images/hisobotimg.png'

export default function HomePage() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default installation prompt
      event.preventDefault();
      // Store the event for later use
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallButtonClick = () => {
    // Show the installation prompt when the custom button is clicked
    if (deferredPrompt) {
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation");
        } else {
          console.log("User dismissed the installation");
        }

        // Reset the deferred prompt variable
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="main">
      {/* ... (your existing content) */}
      <div className="navbar">
        <div className="container">
          <img src={himg} className="mttl" />
          <button className="mbtn" onClick={handleInstallButtonClick}>
            Tizimni yuklash
          </button>
        </div>
      </div>
      {/* ... (the rest of your component) */}
      <div className="mbody">
        <div className="prg">
          <p className="bprg">
            O`zbekiston bo`ylab barcha ta`lim markazlarini avtomatlashtirish
            dasturi. Xisobot.uz orqali siz nimalar qila olasiz? Dasturimiz
            orqali o`quvchilarni kelib ketishlari, ular haqida ma`lumot hamda
            ustozlarda qancha o`quvchilar borligi, barcha fanlar alohida
            kategoriyalarda joylashganligi, pul mablag`larini kuzatib borish va
            turli xil qulay imkoniyatlar, barchasi bizda ta`minlangan!
          </p>
        </div>
        <div className="xizmatlar">
          <div className="grp">
            <FaComputer />
            <p className="grp-prg">
              Dasturni o`rnatib, o`rgatish mutlaqo bepul!
            </p>
          </div>
          <div className="grp">
            <MdEditDocument />
            <p className="grp-prg">
              Litsenziya amal qilish muddatigacha qo`llab quvvatlash!`
            </p>
          </div>
          <div className="grp">
            <HiHandThumbUp />
            <p className="grp-prg">
              Barcha xizmat va huquqlar kafolatlangan!
            </p>
          </div>
        </div>
        <div className="mfooter">
            <p className="mfprg">InnaSite - kompaniyasi tomonidan ishlab chiqilgan!</p>
            <p className="mfphonenumber">+998 94 277 48 46</p>
        </div>
      </div>
    </div>
  );
}
