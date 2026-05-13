const products = [
  { id: '01', name: 'Home Decor Range', popularity: 74, sales: '45%', color: '#0095FF' },
  { id: '02', name: 'Disney Princess Pink Bag 18"', popularity: 58, sales: '29%', color: '#00E096' },
  { id: '03', name: 'Bathroom Essentials', popularity: 42, sales: '18%', color: '#884DFF' },
  { id: '04', name: 'Apple Smartwatches', popularity: 34, sales: '25%', color: '#FF8F0D' },
];

const TopProducts = () => {
  return (
    <div className="dashboard-card overflow-hidden xl:h-[250px]">
      <h3 className="dashboard-title">Top Products</h3>
      <div className="overflow-x-auto">
      <table className="mt-3 w-full min-w-[560px] table-fixed">
        <thead>
          <tr className="text-left text-[8px] font-semibold text-[#B8BBD0]">
            <th className="w-[36px] pb-2">#</th>
            <th className="pb-2">Name</th>
            <th className="w-[150px] pb-2">Popularity</th>
            <th className="w-[54px] pb-2 text-right">Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-[#EDF0F7]">
              <td className="py-2 text-[10px] font-semibold text-[#737791]">{product.id}</td>
              <td className="py-2 text-[10px] font-semibold text-[#374557]">{product.name}</td>
              <td className="py-2">
                <div className="h-1.5 rounded-full bg-[#F0F2F8]">
                  <div
                    className="h-1.5 rounded-full"
                    style={{ width: `${product.popularity}%`, backgroundColor: product.color }}
                  />
                </div>
              </td>
              <td className="py-2 text-right">
                <span
                  className="rounded-md border px-2 py-1 text-[9px] font-bold"
                  style={{ borderColor: product.color, color: product.color, backgroundColor: `${product.color}12` }}
                >
                  {product.sales}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TopProducts;
