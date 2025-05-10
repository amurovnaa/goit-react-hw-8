import s from "./Homepage.module.css";

const Homepage = () => {
  return (
    <section className={s.container}>
      <h1>Welcome to Your Contacts App!</h1>
      <h2>Stay Connected and Organized</h2>
      <p className={s.description}>
        Manage your contacts with ease, whether for personal or professional
        purposes. With our app, you can quickly add, search, and organize all
        your contacts in one place.
      </p>

      <div className={s.features}>
        <div className={s.feature}>
          <h3 className={s.featureTitle}>Add & Delete Contacts</h3>
          <p className={s.featureText}>
            Easily add new contacts or remove outdated ones with just a few
            clicks.
          </p>
        </div>
        <div className={s.feature}>
          <h3 className={s.featureTitle}>Search & Filter</h3>
          <p className={s.featureText}>
            Find any contact in seconds with advanced search and filter options.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
