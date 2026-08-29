import specifications from "../data/specification";

const Specification = () => {
  return (
    <div className="specifications">
      {specifications.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="grid grid-cols-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            key={item.id}
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Icon size={22} />
            </div>

            <div className="flex gap-15">
              <h4 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h4>

              {/* Subtitle */}
              <p className="mt-1 text-xs text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Specification;
