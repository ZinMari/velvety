import a from "../../../../public/data/products/products.json";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const currentProduct = a.filter((e) => e.id == Number(id));
  return (
    <div>
      <img src={currentProduct[0].src} alt="" />
    </div>
  );
}
