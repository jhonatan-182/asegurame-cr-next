import LinkNavigation from "./LinkNavigation";

const links = [
  {
    url: "/conocenos",
    text: "Conócenos",
    styleButton: false,
  },
  {
    url: "/cotizar",
    text: "Cotizar",
    styleButton: true,
  },
];

export default function HeaderNavigation() {
  return (
    <nav className={`flex justify-between items-center gap-4 text-[15px]`}>
      <div className="hidden lg:block">
        <p className="cursor-pointer">Seguros</p>

        {links.map((link) => (
          <LinkNavigation key={link.url} {...link} />
        ))}
      </div>

      <div className="lg:hidden">Menu</div>
    </nav>
  );
}
