import React from "react";
import "./index.scss";
import { FaComputer } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";

export default function HomePage() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="container">
          <p className="mttl">Xisobot</p>
          <button
            className="mbtn"
            onClick={() => {
              alert("Tizim tayyorlanmoqda!!!");
            }}
          >
            Tizimni yuklash
          </button>
        </div>
      </div>
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
