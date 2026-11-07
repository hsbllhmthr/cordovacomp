import React, { useState } from 'react';
import {
  LayoutGrid,
  Layers,
  Newspaper,
  Plus,
  Trash2,
  Search,
  CheckCircle2,
  ArrowLeft,
  LogOut,
  X,
  Star,
  FileText,
  Store,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface CategoryData {
  id: string;
  title: string;
  description: string;
  image?: string;
  totalProducts?: number;
}

interface ArticleData {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  featured: boolean;
  author?: string;
}

interface AdminDashboardPageProps {
  onNavigateHome?: () => void;
  onLogout?: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  onNavigateHome,
  onLogout,
}) => {
  // Tab menu navigasi
  const [activeTab, setActiveTab] = useState<'overview' | 'categories' | 'articles'>('overview');

  // Filter tampilan tabel di tab Ringkasan
  const [overviewTableFilter, setOverviewTableFilter] = useState<'all' | 'categories' | 'articles'>('all');

  // ==========================================
  // STATE DATA: KATEGORI PRODUK
  // ==========================================
  const [categories, setCategories] = useState<CategoryData[]>([
    {
      id: 'alquran',
      title: "Al-Qur'an & Mushaf",
      description: "Mushaf tajwid, hafalan, terjemah, wakaf, dan Al-Qur'an eksklusif berbagai ukuran.",
      image: '/images/alquran.png',
      totalProducts: 42,
    },
    {
      id: 'buku-islami',
      title: 'Buku Literatur Islami',
      description: 'Buku fiqih, sirah nabawiyah, aqidah, parenting Islami, hingga buku anak.',
      image: '/images/buku-islami.png',
      totalProducts: 128,
    },
    {
      id: 'perlengkapan-ibadah',
      title: 'Perlengkapan Ibadah',
      description: 'Mukena premium, sarung, sajadah busa & travel, peci, tasbih, dan wewangian.',
      image: '/images/kebutuhan-ibadah.png',
      totalProducts: 85,
    },
    {
      id: 'fashion-muslim',
      title: 'Fashion Muslim & Muslimah',
      description: "Gamis, abaya, jilbab, koko, kurta, rompi sholat, serta pakaian anak syar'i.",
      image: '/images/fashion.png',
      totalProducts: 94,
    },
    {
      id: 'haji-umrah',
      title: 'Perlengkapan Haji & Umrah',
      description: 'Kain ihram, sabuk, sandal haji, botol spray wudhu, kaos kaki, hingga koper travel.',
      image: '/images/perlengkapan-haji.png',
      totalProducts: 60,
    },
    {
      id: 'paket-oleh',
      title: 'Oleh-Oleh Haji & Umrah',
      description: 'Paket oleh-oleh haji siap bagi, kemasan eksklusif Ka\'bah, air zam-zam terjamin.',
      image: '/images/paket-oleh.png',
      totalProducts: 50,
    },
    {
      id: 'kurma',
      title: 'Aneka Kurma',
      description: 'Kurma Ajwa, Sukari, Medjool, air zam-zam terjamin, kismis, kacang arab.',
      image: '/images/kurma.png',
      totalProducts: 38,
    },
    {
      id: 'herbal',
      title: 'Herbal & Thibbun Nabawi',
      description: 'Madu murni, habbatussauda, minyak zaitun, propolis, dan produk kesehatan alami.',
      image: '/images/herbal.png',
      totalProducts: 76,
    },
  ]);

  // Modal & Form Kategori Baru
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState('');
  const [newCategory, setNewCategory] = useState({
    title: '',
    description: '',
    image: '',
  });

  // ==========================================
  // STATE DATA: ARTIKEL & BERITA
  // ==========================================
  const [articles, setArticles] = useState<ArticleData[]>([
    {
      id: 1,
      title: 'Pastikan Kebutuhan Ibadah Umat Terpenuhi, Cordova Super Store Perluas Layanan One-Stop Store Makassar',
      category: 'PRESS RELEASE',
      date: '24 Oktober 2026',
      image: '/images/bg-outlet.png',
      featured: true,
      author: 'Tim Humas',
    },
    {
      id: 2,
      title: 'Sambut Musim Umrah, Cordova Hadirkan Paket Lengkap Perlengkapan Ibadah Siap Berangkat',
      category: 'INFO PRODUK',
      date: '22 Oktober 2026',
      image: '/images/features/feature-3.png',
      featured: false,
      author: 'Retail Team',
    },
    {
      id: 3,
      title: "Penyediaan Mushaf Al-Qur'an Bertashih Resmi Kemenag dan Pustaka Islam Bermutu",
      category: 'PRESS RELEASE',
      date: '19 Oktober 2026',
      image: '/images/features/feature-1.png',
      featured: false,
      author: 'Tim Pustaka',
    },
    {
      id: 4,
      title: 'Jaminan Keaslian 100%: Kurma Pilihan, Madu Murni, dan Herbal Thibbun Nabawi',
      category: 'EDUKASI',
      date: '15 Oktober 2026',
      image: '/images/features/feature-4.png',
      featured: false,
      author: 'Divisi Herbal',
    },
    {
      id: 5,
      title: 'Kolaborasi Strategis Cordova Bersama Puluhan Mitra Travel Umrah dan Komunitas',
      category: 'KERJA SAMA',
      date: '10 Oktober 2026',
      image: '/images/features/feature-2.png',
      featured: false,
      author: 'Tim Kemitraan',
    },
  ]);

  // Modal & Form Artikel Baru
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [articleSearch, setArticleSearch] = useState('');
  const [articleFilter, setArticleFilter] = useState<string>('SEMUA');
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: 'PRESS RELEASE',
    image: '',
    featured: false,
    author: 'Admin Cordova',
  });

  // Notifikasi Aksi Berhasil
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handler Tambah Kategori
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.title.trim()) return;

    const id = newCategory.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const created: CategoryData = {
      id,
      title: newCategory.title,
      description: newCategory.description || 'Kategori kebutuhan muslim Cordova Super Store.',
      image: newCategory.image || '/images/alquran.png',
      totalProducts: 0,
    };

    setCategories([created, ...categories]);
    setNewCategory({ title: '', description: '', image: '' });
    setIsCategoryModalOpen(false);
    showToast(`Kategori "${created.title}" berhasil ditambahkan.`);
  };

  // Handler Hapus Kategori
  const handleDeleteCategory = (id: string, title: string) => {
    if (confirm(`Yakin ingin menghapus kategori "${title}"?`)) {
      setCategories(categories.filter((c) => c.id !== id));
      showToast(`Kategori "${title}" telah dihapus.`);
    }
  };

  // Handler Tambah Artikel
  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticle.title.trim()) return;

    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('id-ID', { month: 'long' })} ${now.getFullYear()}`;

    const created: ArticleData = {
      id: Date.now(),
      title: newArticle.title,
      category: newArticle.category,
      date: formattedDate,
      image: newArticle.image || '/images/features/feature-1.png',
      featured: newArticle.featured,
      author: newArticle.author || 'Admin Cordova',
    };

    let updated = [...articles];
    if (created.featured) {
      updated = updated.map((a) => ({ ...a, featured: false }));
    }

    setArticles([created, ...updated]);
    setNewArticle({
      title: '',
      category: 'PRESS RELEASE',
      image: '',
      featured: false,
      author: 'Admin Cordova',
    });
    setIsArticleModalOpen(false);
    showToast('Artikel baru berhasil dipublikasikan.');
  };

  // Handler Hapus Artikel
  const handleDeleteArticle = (id: number, title: string) => {
    if (confirm(`Yakin ingin menghapus artikel "${title.slice(0, 35)}..."?`)) {
      setArticles(articles.filter((a) => a.id !== id));
      showToast('Artikel telah dihapus.');
    }
  };

  // Handler Toggle Featured Status
  const handleToggleFeatured = (id: number) => {
    setArticles(
      articles.map((a) => (a.id === id ? { ...a, featured: !a.featured } : { ...a, featured: false }))
    );
    showToast('Status artikel utama diperbarui.');
  };

  // Filter Kategori
  const filteredCategories = categories.filter((c) =>
    c.title.toLowerCase().includes(categorySearch.toLowerCase()) ||
    c.description.toLowerCase().includes(categorySearch.toLowerCase())
  );

  // Filter Artikel
  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(articleSearch.toLowerCase()) ||
      a.category.toLowerCase().includes(articleSearch.toLowerCase());
    const matchesFilter = articleFilter === 'SEMUA' || a.category === articleFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full h-screen min-h-screen bg-[#FBFBFD] text-neutral-900 font-['Poppins'] flex flex-col lg:flex-row overflow-hidden select-none">
      {/* Toast Alert Minimalis */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-neutral-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-medium animate-fade-in border border-neutral-800">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================
          SIDEBAR MINIMALIS BERSIH (WHITE THEMED)
          ======================================================== */}
      <aside className="w-full lg:w-[260px] xl:w-[275px] h-auto lg:h-screen bg-white border-r border-neutral-200/80 flex flex-col justify-between p-6 shrink-0 overflow-y-auto">
        <div>
          {/* Logo & Identitas */}
          <div className="flex items-center gap-3 mb-8 pl-1">
            <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center p-1.5 shadow-2xs">
              <img src="/images/icon.png" alt="Cordova Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-sm font-semibold text-neutral-900 block leading-tight tracking-tight">
                Cordova Store
              </span>
              <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                Management Portal
              </span>
            </div>
          </div>

          {/* Label Menu */}
          <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider px-3 mb-2">
            Menu Utama
          </div>

          {/* Navigasi Utama Minimalis */}
          <nav className="space-y-1">
            {/* 1. Ringkasan */}
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutGrid size={17} className={activeTab === 'overview' ? 'text-white' : 'text-neutral-400'} />
                <span>Ringkasan</span>
              </div>
            </button>

            {/* 2. Kategori Produk */}
            <button
              onClick={() => setActiveTab('categories')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'categories'
                  ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers size={17} className={activeTab === 'categories' ? 'text-white' : 'text-neutral-400'} />
                <span>Kategori Produk</span>
              </div>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  activeTab === 'categories' ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                {categories.length}
              </span>
            </button>

            {/* 3. Manajemen Artikel */}
            <button
              onClick={() => setActiveTab('articles')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'articles'
                  ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
              }`}
            >
              <div className="flex items-center gap-3">
                <Newspaper size={17} className={activeTab === 'articles' ? 'text-white' : 'text-neutral-400'} />
                <span>Manajemen Artikel</span>
              </div>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  activeTab === 'articles' ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                {articles.length}
              </span>
            </button>
          </nav>

          {/* Pintasan Eksternal */}
          <div className="pt-6">
            <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider px-3 mb-2">
              Pintasan Toko
            </div>
            <a
              href="#produk"
              onClick={onNavigateHome}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Store size={17} className="text-neutral-400" />
                <span>Etalase Produk Web</span>
              </div>
              <ExternalLink size={13} className="text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Panel Bawah: Profil Admin & Logout */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="flex items-center justify-between p-2 rounded-2xl bg-neutral-50/80 border border-neutral-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-neutral-900 leading-tight">Admin Toko</span>
                <span className="text-[10px] text-neutral-400 leading-tight">Cordova Makassar</span>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" title="Online" />
          </div>

          <div className="flex items-center justify-between text-xs px-1">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>Lihat Website</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
            >
              <LogOut size={13} />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ========================================================
          AREA KONTEN UTAMA: PUTIH MINIMALIS & ESTETIK
          ======================================================== */}
      <main className="flex-1 h-auto lg:h-screen flex flex-col justify-between overflow-y-auto bg-[#FBFBFD]">
        {/* 1. Header Bar Atas Minimalis */}
        <header className="w-full bg-white border-b border-neutral-200/70 px-6 sm:px-8 lg:px-10 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-0.5">
              <span>Admin</span>
              <ChevronRight size={12} />
              <span className="text-neutral-600 font-medium capitalize">{activeTab}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              {activeTab === 'overview' && 'Ringkasan Dashboard'}
              {activeTab === 'categories' && 'Manajemen Kategori Produk'}
              {activeTab === 'articles' && 'Manajemen Artikel & Berita'}
            </h1>
          </div>

          {/* Quick Header Action */}
          <div className="flex items-center gap-3">
            {activeTab === 'categories' && (
              <button
                onClick={() => setIsCategoryModalOpen(true)}
                className="h-9 px-4 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-medium transition-all shadow-2xs flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Plus size={15} />
                <span>Tambah Kategori</span>
              </button>
            )}

            {activeTab === 'articles' && (
              <button
                onClick={() => setIsArticleModalOpen(true)}
                className="h-9 px-4 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-medium transition-all shadow-2xs flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Plus size={15} />
                <span>Tulis Artikel Baru</span>
              </button>
            )}

            <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sistem Aktif</span>
            </div>
          </div>
        </header>

        {/* 2. Isi Halaman Berdasarkan Tab */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          {/* ====================================================
              TAB 1: RINGKASAN (OVERVIEW)
              ==================================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              {/* 4 Kartu Metrik Minimalis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metrik 1: Kategori */}
                <div
                  onClick={() => setActiveTab('categories')}
                  className="bg-white p-5 rounded-2xl border border-neutral-200/70 hover:border-neutral-300 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-center justify-between text-neutral-400 mb-3">
                    <span className="text-xs font-medium">Kategori Produk</span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <Layers size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">
                    {categories.length}
                  </div>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                    <span>Lihat &amp; kelola kategori &rarr;</span>
                  </span>
                </div>

                {/* Metrik 2: Artikel */}
                <div
                  onClick={() => setActiveTab('articles')}
                  className="bg-white p-5 rounded-2xl border border-neutral-200/70 hover:border-neutral-300 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-center justify-between text-neutral-400 mb-3">
                    <span className="text-xs font-medium">Publikasi Berita</span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <Newspaper size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">
                    {articles.length}
                  </div>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                    <span>Buka News Room &rarr;</span>
                  </span>
                </div>

                {/* Metrik 3: Status Publik */}
                <div className="bg-white p-5 rounded-2xl border border-neutral-200/70 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-400 mb-3">
                    <span className="text-xs font-medium">Status Katalog</span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 tracking-tight mb-1">
                    Live
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Katalog publik aktif &amp; sinkron
                  </span>
                </div>

                {/* Metrik 4: Integrasi WhatsApp */}
                <div className="bg-white p-5 rounded-2xl border border-neutral-200/70 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-400 mb-3">
                    <span className="text-xs font-medium">Integrasi WhatsApp</span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">
                    2 Admin
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Layanan belanja &amp; kemitraan
                  </span>
                </div>
              </div>

              {/* Aksi Cepat / Shortcut Bar */}
              <div className="bg-white rounded-2xl border border-neutral-200/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Perbarui Konten Website Cordova</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Tambahkan kategori koleksi baru atau publikasikan siaran pers kegiatan terbaru dengan cepat.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setIsCategoryModalOpen(true)}
                    className="flex-1 sm:flex-none h-9 px-4 rounded-xl border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus size={14} />
                    <span>Kategori Baru</span>
                  </button>
                  <button
                    onClick={() => setIsArticleModalOpen(true)}
                    className="flex-1 sm:flex-none h-9 px-4 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus size={14} />
                    <span>Tulis Artikel</span>
                  </button>
                </div>
              </div>

              {/* Bagian Tabel Data Ringkasan (Full-Width Table, Bukan 2 Kolom) */}
              <div className="space-y-6">
                {/* Kontrol Tab Filter Tampilan Tabel */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-neutral-200/70 shadow-2xs">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    <button
                      onClick={() => setOverviewTableFilter('all')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        overviewTableFilter === 'all'
                          ? 'bg-neutral-900 text-white shadow-2xs'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70'
                      }`}
                    >
                      Tampilkan Semua Tabel
                    </button>
                    <button
                      onClick={() => setOverviewTableFilter('categories')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        overviewTableFilter === 'categories'
                          ? 'bg-neutral-900 text-white shadow-2xs'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70'
                      }`}
                    >
                      Tabel Kategori Produk ({categories.length})
                    </button>
                    <button
                      onClick={() => setOverviewTableFilter('articles')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        overviewTableFilter === 'articles'
                          ? 'bg-neutral-900 text-white shadow-2xs'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70'
                      }`}
                    >
                      Tabel Artikel Terkini ({articles.length})
                    </button>
                  </div>

                  <span className="text-[11px] text-neutral-400 self-end sm:self-auto">
                    Layout Tabel Penuh (1 Kolom)
                  </span>
                </div>

                {/* 1. TABEL KATEGORI PRODUK (Full-Width) */}
                {(overviewTableFilter === 'all' || overviewTableFilter === 'categories') && (
                  <div className="bg-white rounded-2xl border border-neutral-200/70 overflow-hidden shadow-2xs">
                    {/* Header Tabel */}
                    <div className="p-5 sm:px-6 sm:py-4.5 border-b border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800">
                          <Layers size={16} />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                            Daftar Kategori Produk
                          </h4>
                          <span className="text-[11px] text-neutral-400">
                            Total {categories.length} kategori aktif terdaftar di sistem
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab('categories')}
                        className="text-xs text-neutral-600 hover:text-neutral-900 font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <span>Kelola Semua</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    {/* Kontainer Tabel Responsif */}
                    <div className="w-full overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-neutral-100 bg-neutral-50/60 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                            <th className="py-3 px-5">Kategori Produk</th>
                            <th className="py-3 px-5 hidden md:table-cell">Deskripsi</th>
                            <th className="py-3 px-5">Jumlah Produk</th>
                            <th className="py-3 px-5 hidden sm:table-cell">Status Katalog</th>
                            <th className="py-3 px-5 text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 text-neutral-700">
                          {categories.slice(0, 6).map((cat) => (
                            <tr key={cat.id} className="hover:bg-neutral-50/50 transition-colors group">
                              {/* Kolom Kategori (Gambar + Nama + ID) */}
                              <td className="py-3.5 px-5">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-10 h-10 rounded-xl object-cover border border-neutral-200/80 bg-neutral-50 shrink-0"
                                    onError={(e) => {
                                      e.currentTarget.src = '/images/alquran.png';
                                    }}
                                  />
                                  <div>
                                    <span className="font-semibold text-neutral-900 block text-xs">
                                      {cat.title}
                                    </span>
                                    <span className="text-[10px] text-neutral-400 font-mono">
                                      #{cat.id}
                                    </span>
                                  </div>
                                </div>
                              </td>

                              {/* Kolom Deskripsi */}
                              <td className="py-3.5 px-5 hidden md:table-cell text-neutral-500 max-w-xs">
                                <span className="line-clamp-1">{cat.description}</span>
                              </td>

                              {/* Kolom Total Produk */}
                              <td className="py-3.5 px-5 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-700">
                                  {cat.totalProducts || 0} item
                                </span>
                              </td>

                              {/* Kolom Status */}
                              <td className="py-3.5 px-5 hidden sm:table-cell whitespace-nowrap">
                                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  <span>Aktif di Web</span>
                                </span>
                              </td>

                              {/* Kolom Aksi */}
                              <td className="py-3.5 px-5 text-right whitespace-nowrap">
                                <div className="inline-flex items-center gap-1">
                                  <button
                                    onClick={() => setActiveTab('categories')}
                                    className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                                    title="Buka Kategori"
                                  >
                                    <ExternalLink size={14} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteCategory(cat.id, cat.title)}
                                    className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                    title="Hapus Kategori"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 2. TABEL ARTIKEL & SIARAN PERS TERKINI (Full-Width) */}
                {(overviewTableFilter === 'all' || overviewTableFilter === 'articles') && (
                  <div className="bg-white rounded-2xl border border-neutral-200/70 overflow-hidden shadow-2xs">
                    {/* Header Tabel */}
                    <div className="p-5 sm:px-6 sm:py-4.5 border-b border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800">
                          <Newspaper size={16} />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                            Artikel &amp; Publikasi Berita Terkini
                          </h4>
                          <span className="text-[11px] text-neutral-400">
                            Total {articles.length} siaran pers dan artikel terpublikasi
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab('articles')}
                        className="text-xs text-neutral-600 hover:text-neutral-900 font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <span>Kelola Semua</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    {/* Kontainer Tabel Responsif */}
                    <div className="w-full overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-neutral-100 bg-neutral-50/60 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                            <th className="py-3 px-5">Artikel &amp; Berita</th>
                            <th className="py-3 px-5">Kategori</th>
                            <th className="py-3 px-5 hidden md:table-cell">Penulis</th>
                            <th className="py-3 px-5 hidden sm:table-cell">Tanggal Publikasi</th>
                            <th className="py-3 px-5">Status</th>
                            <th className="py-3 px-5 text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 text-neutral-700">
                          {articles.slice(0, 5).map((art) => (
                            <tr key={art.id} className="hover:bg-neutral-50/50 transition-colors group">
                              {/* Kolom Artikel (Gambar + Judul) */}
                              <td className="py-3.5 px-5 max-w-sm">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-10 h-10 rounded-xl object-cover border border-neutral-200/80 bg-neutral-50 shrink-0"
                                    onError={(e) => {
                                      e.currentTarget.src = '/images/bg-outlet.png';
                                    }}
                                  />
                                  <span className="font-semibold text-neutral-900 text-xs line-clamp-2 leading-snug">
                                    {art.title}
                                  </span>
                                </div>
                              </td>

                              {/* Kolom Kategori / Tag */}
                              <td className="py-3.5 px-5 whitespace-nowrap">
                                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-neutral-100 text-neutral-700 uppercase tracking-wide">
                                  {art.category}
                                </span>
                              </td>

                              {/* Kolom Penulis */}
                              <td className="py-3.5 px-5 hidden md:table-cell text-neutral-500 whitespace-nowrap">
                                {art.author || 'Admin'}
                              </td>

                              {/* Kolom Tanggal */}
                              <td className="py-3.5 px-5 hidden sm:table-cell whitespace-nowrap text-neutral-400">
                                <div className="flex items-center gap-1.5">
                                  <Clock size={12} />
                                  <span>{art.date}</span>
                                </div>
                              </td>

                              {/* Kolom Status */}
                              <td className="py-3.5 px-5 whitespace-nowrap">
                                {art.featured ? (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                                    <Star size={10} className="fill-current" />
                                    <span>Utama</span>
                                  </span>
                                ) : (
                                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium text-neutral-500 bg-neutral-100">
                                    Reguler
                                  </span>
                                )}
                              </td>

                              {/* Kolom Aksi */}
                              <td className="py-3.5 px-5 text-right whitespace-nowrap">
                                <div className="inline-flex items-center gap-1">
                                  <button
                                    onClick={() => handleToggleFeatured(art.id)}
                                    className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                      art.featured
                                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                                        : 'bg-white text-neutral-400 border-neutral-200 hover:text-neutral-900 hover:bg-neutral-50'
                                    }`}
                                    title={art.featured ? 'Batalkan status utama' : 'Jadikan artikel utama'}
                                  >
                                    <Star size={13} className={art.featured ? 'fill-current' : ''} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteArticle(art.id, art.title)}
                                    className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 border border-neutral-200 transition-colors cursor-pointer"
                                    title="Hapus artikel"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ====================================================
              TAB 2: MANAJEMEN KATEGORI PRODUK
              ==================================================== */}
          {activeTab === 'categories' && (
            <div className="space-y-6 animate-fade-in">
              {/* Toolbar Pencarian & Aksi */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200/70 shadow-2xs">
                <div className="relative flex-1 max-w-md">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    placeholder="Cari kategori produk..."
                    className="w-full h-9 pl-9 pr-4 rounded-xl bg-neutral-50/70 border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-neutral-500">
                  <span>Menampilkan <strong>{filteredCategories.length}</strong> kategori</span>
                </div>
              </div>

              {/* Grid Kartu Kategori Minimalis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-white rounded-2xl border border-neutral-200/70 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-all shadow-2xs group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative h-40 w-full overflow-hidden bg-neutral-100">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = '/images/alquran.png';
                          }}
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-neutral-800 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-neutral-200/60 shadow-2xs">
                          {cat.id}
                        </div>
                      </div>

                      {/* Info Kategori */}
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1 leading-snug">{cat.title}</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer Kartu */}
                    <div className="px-4 py-3 border-t border-neutral-100 flex items-center justify-between text-xs bg-neutral-50/40">
                      <span className="text-[11px] font-medium text-neutral-600">
                        {cat.totalProducts || 0} Produk Aktif
                      </span>
                      <button
                        onClick={() => handleDeleteCategory(cat.id, cat.title)}
                        className="text-neutral-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title="Hapus Kategori"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCategories.length === 0 && (
                <div className="py-20 text-center bg-white rounded-2xl border border-neutral-200/70 p-6">
                  <p className="text-xs text-neutral-500">
                    Tidak ditemukan kategori dengan kata kunci "{categorySearch}".
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ====================================================
              TAB 3: MANAJEMEN ARTIKEL (NEWS ROOM)
              ==================================================== */}
          {activeTab === 'articles' && (
            <div className="space-y-6 animate-fade-in">
              {/* Toolbar Pencarian & Filter Pill */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200/70 shadow-2xs">
                <div className="relative flex-1 max-w-md">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={articleSearch}
                    onChange={(e) => setArticleSearch(e.target.value)}
                    placeholder="Cari artikel berita..."
                    className="w-full h-9 pl-9 pr-4 rounded-xl bg-neutral-50/70 border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors"
                  />
                </div>

                {/* Filter Kategori */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {['SEMUA', 'PRESS RELEASE', 'INFO PRODUK', 'EDUKASI', 'KERJA SAMA'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setArticleFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                        articleFilter === cat
                          ? 'bg-neutral-900 text-white font-semibold'
                          : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/70'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Daftar Artikel Rapi (Clean White Table-Card Layout) */}
              <div className="bg-white rounded-2xl border border-neutral-200/70 divide-y divide-neutral-100 overflow-hidden shadow-2xs">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50/60 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-neutral-200/80 bg-neutral-50 shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = '/images/bg-outlet.png';
                        }}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 tracking-wide uppercase">
                            {art.category}
                          </span>
                          {art.featured && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                              <Star size={10} className="fill-current" />
                              <span>Artikel Utama</span>
                            </span>
                          )}
                          <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                            <Clock size={11} />
                            <span>{art.date}</span>
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-neutral-900 leading-snug line-clamp-2 mb-1">
                          {art.title}
                        </h4>
                        <span className="text-[11px] text-neutral-400">Penulis: {art.author || 'Admin'}</span>
                      </div>
                    </div>

                    {/* Tombol Aksi Minimalis */}
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => handleToggleFeatured(art.id)}
                        className={`p-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                          art.featured
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-white text-neutral-400 border-neutral-200 hover:text-neutral-900 hover:bg-neutral-50'
                        }`}
                        title={art.featured ? 'Batalkan status utama' : 'Jadikan artikel utama'}
                      >
                        <Star size={14} className={art.featured ? 'fill-current' : ''} />
                      </button>

                      <button
                        onClick={() => handleDeleteArticle(art.id, art.title)}
                        className="p-2 rounded-xl text-neutral-400 hover:text-red-600 hover:bg-red-50 border border-neutral-200 transition-colors cursor-pointer"
                        title="Hapus artikel"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                {filteredArticles.length === 0 && (
                  <div className="py-20 text-center p-6">
                    <p className="text-xs text-neutral-500">Tidak ada artikel yang cocok dengan pencarian.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ========================================================
          MODAL 1: FORM TAMBAH KATEGORI PRODUK (CLEAN WHITE)
          ======================================================== */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-fade-in border border-neutral-200">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center">
                  <Plus size={16} />
                </div>
                <h3 className="text-sm font-bold text-neutral-900">Tambah Kategori Produk Baru</h3>
              </div>
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Nama Kategori Produk *
                </label>
                <input
                  type="text"
                  required
                  value={newCategory.title}
                  onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                  placeholder="Contoh: Songkok &amp; Peci Eksklusif"
                  className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Deskripsi Singkat Kategori
                </label>
                <textarea
                  rows={3}
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  placeholder="Jelaskan jenis produk yang termasuk dalam kategori ini..."
                  className="w-full p-3 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Path / URL Gambar Cover Kategori
                </label>
                <input
                  type="text"
                  value={newCategory.image}
                  onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
                  placeholder="Contoh: /images/alquran.png atau URL web"
                  className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="flex justify-end gap-2.5 pt-3 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                >
                  Simpan Kategori
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 2: FORM TULIS ARTIKEL BARU (CLEAN WHITE)
          ======================================================== */}
      {isArticleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-fade-in border border-neutral-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center">
                  <FileText size={16} />
                </div>
                <h3 className="text-sm font-bold text-neutral-900">Tulis Artikel &amp; Publikasi Baru</h3>
              </div>
              <button
                onClick={() => setIsArticleModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddArticle} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Judul Artikel / Berita *
                </label>
                <input
                  type="text"
                  required
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  placeholder="Contoh: Semarak Ramadhan, Cordova Berikan Program Spesial..."
                  className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Kategori Berita
                  </label>
                  <select
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 bg-white"
                  >
                    <option value="PRESS RELEASE">PRESS RELEASE</option>
                    <option value="INFO PRODUK">INFO PRODUK</option>
                    <option value="EDUKASI">EDUKASI</option>
                    <option value="KERJA SAMA">KERJA SAMA</option>
                    <option value="PROMO">PROMO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Penulis / Tim
                  </label>
                  <input
                    type="text"
                    value={newArticle.author}
                    onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                    placeholder="Contoh: Tim Media Cordova"
                    className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Path / URL Gambar Cover
                </label>
                <input
                  type="text"
                  value={newArticle.image}
                  onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
                  placeholder="Contoh: /images/bg-outlet.png atau tautan web"
                  className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newArticle.featured}
                    onChange={(e) => setNewArticle({ ...newArticle, featured: e.target.checked })}
                    className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-900 accent-neutral-900"
                  />
                  <span>Jadikan Artikel Utama (*Featured Story*)</span>
                </label>
              </div>

              <div className="flex justify-end gap-2.5 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setIsArticleModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                >
                  Publikasikan Artikel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
