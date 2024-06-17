export function ProfileHeader() {
    return (
        <div className="flex flex-row justify-between items-start">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="relative overflow-hidden rounded-[100px] w-10 h-10 bg-[#0e0e0e]">
                        <img
                            src="/christian-buehner-DItYlc26zVI-unsplash%201.png"
                            alt="avatar"
                            className="w-20 h-[53px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-0 justify-center items-start relative">
                        <p className="text-center leading-6 text-base text-light">
                            Alex Johnson
                        </p>
                        <small className="opacity-40 text-center leading-3 text-xs text-light">
                            Pilot
                        </small>
                    </div>
                </div>

                <div className="flex">
                    <button className="rounded-[100px] border border-active px-4 py-2 flex gap-2 items-center relative bg-transparent text-center leading-6 text-base text-active">
                        Choose Exchange
                    </button>
                </div>
            </div>
        </div>
    );
}
