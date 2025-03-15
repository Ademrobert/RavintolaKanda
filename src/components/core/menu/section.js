import SectionHeader from "@/components/common/section-header";
import SingleMenuItem from "@/components/core/menu/single-item";

export default function MenuSection({ title, items }) {
  return (
    <div className="m-4 bg-gray-100 rounded-lg shadow p-4">
      <SectionHeader subHeader="" mainHeader={title}/>
      <div className="grid mt-4 gap-6 grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => (
          <SingleMenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

