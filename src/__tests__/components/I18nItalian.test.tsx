import "@testing-library/jest-dom";
import itLocale from "@/locales/it.json";

describe("Italian Translation Keys", () => {
  it("contains all expected venue keys in Italian", () => {
    expect(itLocale.venue).toBeDefined();
    expect(itLocale.venue.reviews).toBe("Recensioni");
    expect(itLocale.venue.noReviewsYet).toBe("Ancora Nessuna Recensione");
    expect(itLocale.venue.beTheFirst).toBe("Sii il primo a condividere la tua valutazione dello spazio di lavoro.");
    expect(itLocale.venue.wifi).toBe("WiFi");
    expect(itLocale.venue.power).toBe("Presa Elettrica");
    expect(itLocale.venue.noise).toBe("Rumorosità");
    expect(itLocale.venue.yes).toBe("Sì");
    expect(itLocale.venue.no).toBe("No");
    expect(itLocale.venue.viewSpeedtest).toBe("Visualizza lo Screenshot dello Speedtest");
    expect(itLocale.venue.translate).toBe("Traduci");
    expect(itLocale.venue.translating).toBe("Traduzione in corso...");
  });
});
