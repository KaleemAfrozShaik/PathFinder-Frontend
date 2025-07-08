import { useNavigate } from "react-router-dom";
import React from "react";
const CareerPaths = () => {
  const navigate = useNavigate();
  const careerPaths = [
            {
              id:"web-developer",
              title: "Web Developer",
              desc: "Build and maintain websites and web applications.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp1T-Nv5clCzJRJZVw8RPH838w6LCsa5L3jusInDHylWKdaIpM0u_i9ETA9VsD9L-oGYphfGQW7K3WMMLxIVaDM614qhQP9PRa8qE-dVE09oLdq2fpORStRE0zVN6ZwFW7uXBPvFusvqQLsurK6svZ7LSZzUrcdjdWVPSuyHkUz3FXJKPqSfta2BKUbr83D5s5RqOwSwWGZAHGHUWCUazF_RTMuUnBpvbfVOU_yKHZgEpPQ3XQUixbWBUJFWzHaoJRu55zmgdCI9Q",
            },
            {
              id:"data-scientist",
              title: "Data Scientist",
              desc: "Analyze complex data to inform business decisions.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDS8uPgCsPa7IcbcVsG2fHfBfqpOeJfkjnAl7SNzFVIRxMGMA9FV721i2BMNn5WJtXpxybKZrL1XvOJ01fU0koUNU-o8JK_0F-02gVrEKoF0CoMkDx1i5CZzDT9Tel989Chw3rmaZuU_wUINi2hKeKLnScRL56wRe52_fNVQD2a63W-7dzaBIeATnfLi5DV1CuRdA4qmNIkZCyhKJKYkesXM2lfia5D4JacXmJZk9qs9B6wCwg6DfSucjOWPA7pF8J6rSMz4I8f3I",
            },
            {
              id:"ai-engineer",
              title: "AI Engineer",
              desc: "Develop intelligent systems and algorithms.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX7X2BIeKZGp9-tBMWN40sYEodQFoPT2Q7ZG6gp825ffgutjusqtQnKXayqFic8LV_eMWwbrlq9hREebSu0WWFGlBhiWreASAjDEAwCT-iqxrE4Y7dO5YvAz-0m4yvFOYE-FWQJ2s6jUxJ2vlA_voqbLC8XBJm7SluRmIG_SNpAKEeq5T1bozkmezDogk0fvaSitCfdP1B8gRotaKAbJAUjafR1fS2hmksQwPZG8MfJafxT4tPLYnvkhTUhBMiq_pIHQMdcNjbUDs",
            },
            {
              id:"product-manager",
              title: "Product Manager",
              desc: "Lead the development and launch of new products.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqE2SmADvote0QWkkPTnxUy8EEdO0UNUuvLtRqZ7S5_1LnwdgVVyhfasHgZEBOKadOl2imZnkmrMRzsD4n3c926Dbp632NCS8dR2DOGR0n_BLv4vnu0EAsfDLD-DFVLkMiGOdKugmHmbT7HOgWb6dfP_lhNqLqsxJIPtv2sPwTkQWIJfeRcUKwnPEOUW2QtqcNSBEVGdPb1BwqduOJmvMfTu43ejvxidkzKu_ulqa2F3xSwLHPBEuQqAgpcocXDYDaqARLrbLh3eE",
            },
            {
              id:"ux-ui-designer",
              title: "UX/UI Designer",
              desc: "Design user-friendly and engaging digital experiences.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZUuiQ-L8uCgW-0P9btQJC2Tdtq6lmyaA_md0JrMfiiOS1U9y1hwZce8L0y3OSGNu64IN50JvXjoVCczY-nru8oIwZ0P1CeMzflOUVWn_odkg6omcScHrxpeMng4UKvQ8FxuYnR0044DQQefKaHRL1ABlXb7gpp7i9MDwcz1qDtE2YO_LjTcOsHpfM1WWxjWmYTw0ZOW1QoPXMaOWNeKOT0GVjpfSaAb-W4boVRzwY9hF9H15mAWUWtK4LYmajsg1HXNMG3K3GvUk",
            },
            {
              id:"digital-marketer",
              title: "Digital Marketer",
              desc: "Promote products and services through online channels.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHmZH3E1NXEoPvbZtCueU8X2BgZs6IVu576MWy9ovE5X4hzudtpBd2fgJ1GbiRszuujeKggRIobJ6cFQcS4f-ggqovwJ-fWZg5WoU0l4O8YF_Y-TEzBMQDM9oCHhbS1z0loHnBfnaGPVQ4EwuAmMuVkNmEx4lQjGrhTM-8uJugNpLemZsm9yH8YvJOXd_2YLjmFKJw1rUanKtHWnbtybm7jzJ7M4LGDrUz18Av_eHoJoLDzkK06AlRQW0TeDkaPEmihXZ1B09y-U",
            },
          ];           
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
              Explore Career Paths
            </p>
            <p className="text-[#60758a] text-sm font-normal leading-normal">
              Discover your ideal career path with our curated roadmaps. Each roadmap provides a step-by-step guide to acquiring the necessary skills and knowledge to succeed in your chosen field.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {careerPaths.map((career, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3" onClick={() => navigate(`/career-paths/${career.id}`)}>
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style={{ backgroundImage: `url(${career.img})` }}
              ></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">{career.title}</p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">{career.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;


