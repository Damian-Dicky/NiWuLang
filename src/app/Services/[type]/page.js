"use client";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../CSS/Components/Navbar.css";
import "../../CSS/Components/Footer.css";
import { useRouter } from "next/navigation";
import "../../CSS/type.css";
import Button from "../../Components/Button";
import "../../CSS/Components/Button.css";
import services from "../../static/Services";
import Image from "next/image";

export default function ServiceType({ params }) {
  return (
    <div>
      <Navbar />
      {services.map((service, index) => {
        if (service.path == params.type) {
          const contentWithBreaks = service.content.split("\n");
          return (
            <div className="service-parent">
              <div className="service-head">
                <h2>{service.name}</h2>
                <Button
                  text={"Contact Us"}
                  onClick={() => {
                    window.location.href = "/Contact";
                  }}
                />
              </div>
              <div key={index} className="service-card">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/r-LZ91JUfLI?si=kELIbhbcGSSitLIK"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/H3P9IjsqI6g?si=5iGOzPAek_rd0lo_"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/QLj1su2NUko?si=498JtMwg1xxdsvAH"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lvDYv5o8fXI?si=9ddh5Apzjr2kxh3n"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Cq__F7ONq2s?si=8iILoxHOUy8HnJcL"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Dqorqt7SnnE?si=c-2M2xmI4gw15cC5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <div className="service-header">
                  {/* <span className="service-icon">{service.icon}</span> */}
                  {contentWithBreaks.map((line, lineIndex) => {
                    const lineWithBold = line.replace(
                      /\*\*(.*?)\*\*/g,
                      "<b>$1</b>"
                    );
                    return line.trim() ? (
                      <p
                        key={lineIndex}
                        dangerouslySetInnerHTML={{ __html: lineWithBold }}
                      />
                    ) : (
                      <br key={lineIndex} />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}

      <Footer />
    </div>
  );
}
