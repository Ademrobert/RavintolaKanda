
export default function SingleMenuItem({ name, description, prices }) {
  return (
    <article className="mb-4">
      <div className="flex items-center">
        <div className="flex-grow">
          <h3 className="text-lg font-medium">{name}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
        <div className="flex flex-col items-end ml-4">
          {Object.entries(prices).map(([size, price]) => (
            <div key={size} className="flex items-center">
              <span className="text-md mr-2">{size}:</span>
              <span className="text-base font-bold">{price}€</span> {/* Increased size and bold */}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
