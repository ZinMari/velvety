export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = (await import("../../../../public/data/products/products.json"))
    .default;
  const currentProduct = data.filter((e) => e.id == Number(id));
  return (
    <div>
      <img src={currentProduct[0].src} alt="" />
    </div>
  );
}
