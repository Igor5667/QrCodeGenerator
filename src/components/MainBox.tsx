function MainBox({ children }: any) {
  return (
    <div className="w-2/3 h-[90%] flex flex-col items-center gap-5 bg-background-card-gradient text-white border border-slate-400 rounded-3xl py-10 shadow-xl">
      {children}
    </div>
  );
}

export default MainBox;
