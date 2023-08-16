import Published from "./Published";
import PublishedConstan, { type IPublished } from "./published.constants";

export default function index() {
  const currentDate = new Date();
  const date = currentDate.toISOString().split("T")[0];
  const time = currentDate.toTimeString().split(" ")[0];
  const uniqueId = `${date}_${time}`;

  return (
    <main className="max-w-[1320px] m-auto">
      <main className="flex flex-wrap gap-4">
        {PublishedConstan.map((item: IPublished) => (
          <Published key={uniqueId} item={item} />
        ))}
      </main>
    </main>
  );
}
