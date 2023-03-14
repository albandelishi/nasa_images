import MainLayout from "../layout/MainLayout";
import SearchSection from "../components/SearchSection";
import SearchResults from "../components/SearchResults";
export default function Search() {
  return (
    <>
      <MainLayout>
        <SearchSection />
        <SearchResults />
      </MainLayout>
    </>
  );
}
