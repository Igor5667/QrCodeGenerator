function MainBox({ children }: any) {
  return (
    <div
      className="h-[100svh] w-[100svw] md:w-2/3 md:h-[90%] flex flex-col items-center gap-5 
    bg-background-phone-gradient md:bg-background-card-gradient text-white border border-slate-400 
    rounded-3xl px-4 md:px-0 py-10 shadow-xl"
    >
      {children}
    </div>
  );
}

export default MainBox;
