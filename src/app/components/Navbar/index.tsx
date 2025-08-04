"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Profil RMU",
    link: "#",
    children: [
      {
        label: "Tentang Perkumpulan",
        link: "/profil/tentang-perkumpulan",
      },
      {
        label: "AD/ART",
        link: "/profil/AD-ART",
      },
      {
        label: "Visi & Misi",
        link: "/profil/visi-misi",
      },
      {
        label: "Sejarah",
        link: "/profil/sejarah",
      },
      {
        label: "Struktur Organisasi",
        link: "/profil/struktur-organisasi",
      },
    ],
  },
  {
    label: "Program Kerja",
    link: "#",
    children: [
      {
        label: "Pelatihan",
        link: "/solusi/pelatihan",
      },
      {
        label: "Pemberdayaan",
        link: "/solusi/pemberdayaan",
      },
      {
        label: "Sinergitas",
        link: "/solusi/sinergitas",
      },
    ],
  },
  {
    label: "Publikasi",
    link: "#",
    children: [
      {
        label: "Laporan Keuangan",
        link: "/hubungan/laporan-keuangan",
      },
      {
        label: "Laporan Tahunan",
        link: "/hubungan/laporan-tahunan",
      },
      {
        label: "Akreditasi",
        link: "/hubungan/akreditasi",
      },
    ],
  },
  {
    label: "Berita",
    link: "#",
    children: [
      {
        label: "Berita Terbaru",
        link: "/berita/berita-terbaru",
      },
      {
        label: "Kegiatan Kami",
        link: "/berita/kegiatan-kami",
      },
    ],
  },
  {
    label: "Sustainability",
    link: "#",
    children: [
      {
        label: "Lingkungan",
        link: "/sustainability/lingkungan",
      },
      {
        label: "Sosial",
        link: "/sustainability/sosial",
      },
      {
        label: "Tata Kelola",
        link: "/sustainability/tata-kelola",
      },
    ],
  },
  {
    label: "Daftar anggota",
    link: "/daftar-anggota",
  },
];

const FrontHeader = () => {
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const router = useRouter();

  function openSideMenu() {
    setSideMenue(true);
  }

  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <section className="flex items-center gap-10">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image src="next.svg" alt="Telkom Indonesia Logo" width={180} height={40} priority className="object-contain" />
                </Link>
              </div>

              {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-4 transition-all">
                {navItems.map((d, i) => (
                  <Link key={i} href={d.link ?? "#"} className="relative group px-2 py-3 transition-all">
                    <p className="flex cursor-pointer items-center gap-2 text-gray-600 group-hover:text-red-600">
                      <span className="text-sm font-medium">{d.label}</span>
                      {d.children && <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />}
                    </p>

                    {/* dropdown */}
                    {d.children && (
                      <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md border border-gray-100 transition-all group-hover:flex z-50">
                        {d.children.map((ch, i) => (
                          <Link key={i} href={ch.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-gray-700 hover:text-red-600">
                            <span className="whitespace-nowrap text-sm">{ch.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>

            {/* Right Side - Search, Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="hidden lg:block p-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl lg:hidden text-gray-600 hover:text-red-600" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden z-40">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all mt-4">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem(e: React.MouseEvent) {
    if (d.children) {
      e.preventDefault();
      setItem(!isItemOpen);
    }
  }

  if (d.children) {
    // For items with children, use a div instead of Link to avoid nesting
    return (
      <div className="relative px-2 py-3 transition-all">
        <div onClick={toggleItem} className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-red-600">
          <span className="text-sm font-medium">{d.label}</span>
          <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
        </div>

        {/* dropdown */}
        {isItemOpen && (
          <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
            {d.children.map((ch, i) => (
              <Link key={i} href={ch.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-gray-600 hover:text-red-600">
                <span className="whitespace-nowrap pl-3 text-sm">{ch.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // For items without children, use Link normally
  return (
    <Link href={d.link ?? "#"} className="relative px-2 py-3 transition-all">
      <p className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-red-600">
        <span className="text-sm font-medium">{d.label}</span>
      </p>
    </Link>
  );
}

export default FrontHeader;
