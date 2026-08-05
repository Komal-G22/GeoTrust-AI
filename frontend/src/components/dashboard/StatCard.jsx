function StatCard({ title, value, color = "text-white" }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 hover:bg-slate-800 transition duration-300">
      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <p className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default StatCard;