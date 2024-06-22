import { RewardCard } from '../components/RewardCard.tsx';

export function DailyQ() {
    return (
      <div className="relative h-[89vh]  ">
        <div className="flex flex-col space-y-4 items-center justify-start w-full overflow-y-auto h-full no-scrollbar">
          <div className="relative h-[130px] w-full mt-[-20px] flex justify-cenet">
            <img
              src="/glowCoin.svg"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 w-[176px]"
              alt="coin"
            />
          </div>
          <div>
            <p className="text-[40px] font-bold leading-10 text-center text-light">
              Earn more coins
            </p>
          </div>
          <p className="w-full text-base leading-normal text-light">
            Daily reward
          </p>
          <div className="flex flex-col gap-y-1 w-full">
            <RewardCard
              title="Daily Reward"
              icon="/calendar.svg"
              coinAmount={5000}
            />
          </div>
          <p className="w-full text-base leading-normal text-light">
            Special tasks
          </p>
          <div className="flex flex-col gap-y-2 w-full">
            <div className=" h-72 flex flex-col gap-y-2">
              <RewardCard
                title="Subscribe to the channel with project news"
                icon="/telegramIcon.svg"
                coinAmount={10000}
              />
              <RewardCard
                title="Join our chat on Telegram"
                icon="/messageIcon.svg"
                coinAmount={10000}
              />
              <RewardCard
                title="Subscribe to us on Twitter"
                icon="/twitterIcon.svg"
                coinAmount={15000}
              />
              <RewardCard
                title="Join our chat on Telegram"
                icon="/messageIcon.svg"
                coinAmount={10000}
              />
              <div className="pb-16">
                <RewardCard
                  title="Subscribe to us on Twitter"
                  icon="/twitterIcon.svg"
                  coinAmount={15000}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-90% to-black pointer-events-none"></div>
      </div>
    );
}
