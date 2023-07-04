import React from "react";

import Steps_Card from "./Steps_Card";

export default function Section_01() {
  return (
    <div className="flex flex-col items-center justify-center gap-28">
      <div className="bg-slate-800 px-[50px] py-[35px] rounded-xl text-white border border-gray-500 shadow-2xl">
        <Steps_Card
          images=""
          title_1="BASLIK DENEME"
          text_1="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."
          classNames="flex items-center gap-[50px]"
          classImage="w-[640px] h-[372px]"
          text_Class="max-w-[280px] word-break flex flex-col gap-[6px]"
          buttons_left
          buttonClass="w-fit px-[15px]"
          button_text="DENEME"
        ></Steps_Card>
      </div>

      <div>
        <Steps_Card
          images=""
          text_1="Görevleri otomatikleştirmek, rolleri yönetmek ve önceden tanımlanmış mesajlar göndermek için özel komutlar oluşturun. MEE6, orijinal komutlar oluşturmanız ve sunucunuzu sorunsuz bir şekilde yönetmeniz için size tam kontrol sağlar."
          title_1="Gelişmiş Özel Komutlar"
          text_Class="text-center w-[600px]"
          classNames="flex flex-col gap-[30px] justify-center items-center"
          classImage="w-[780px] h-[380px] shadow-2xl"
        ></Steps_Card>
      </div>
    </div>
  );
}
