import React, { Component } from 'react';
import $ from 'jquery';

class FaqList extends Component {
  componentDidMount() {
    $('#accordion').on('show.bs.collapse', e => {
      $(e.target)
        .parent()
        .addClass('faq-shown');
    });
    $('#accordion').on('hide.bs.collapse', e => {
      $(e.target)
        .parent()
        .removeClass('faq-shown');
    });
  }

  componentWillUnmount() {
    $('#accordion').off('show.bs.collapse');
    $('#accordion').off('hide.bs.collapse');
  }

  render() {
    let faqIndex = 0;
    return (
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>VCASE DUK</h2>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kas yra vCase.gg ir kaip tai veikia?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg yra dėžių atidarinėjimo puslapis dėl{' '}
                      <a href="http://vgo.gg/" target="_blank">
                        VGO daiktų.{' '}
                      </a>. vCases yra atidaromos naudojant vKey.
                      <br />
                      <br />
                      VGO daiktai yra virtualūs daiktai, sukuriami naudojant blockchain
                      technologiją, taigi bet kas gali mainyti VGO daiktus su kuo tik
                      nori, bet kada panorėję, be jokių draudimų, mainymosi
                      užlaikymų, ar baimės dėl užblokavimo. Kiekvienas VGO daiktas yra
                      unikalus ir gaunamas iš Ethereum išmaniojo
                      kontrakto. Šie daiktai niekada negali būti paveikti jokių
                      mainymosi apribojimų tokių kaip mainymosi užlaikymai ar užblokavimai.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kaip aš galiu gauti vKey?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Yra du būdai gauti vKey:
                      <ul>
                        <li>
                          Nusipirkti iš parduotuvės kuri užsiima VGO
                          daiktais
                        </li>
                        <li>Gauti vKey atliekant mainus su kitu VGO naudotoju</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kodėl tėra tik vienas vKey?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Dėl paprastum, bet kuris vKey gali atidaryti bet kurią vCase.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kodėl atidaryti vCase užtrunka tiek ilgai?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg šiuo metu naudoja Ethereum blockchain,
                      kuris turi daug pliusų, lyginant su tradiciniais dėžių atidarinėjimo
                      puslapiais, pagrindinis iš jų- saugumas. Bet kol mes persikelsime
                      į WAX Blockchain, dėžių atidarymai gali užtrukti iki dviejų
                      minučių, kol bus atlikti, dėl Ethereum
                      blockchain greičio.WAX Blockchain bus žymiai greitesnis ir atliks
                      dėžių atidarymus iškart.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kur mano VGO daiktai nukeliauja, po to kai vCase atidaroma?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VGO daiktai, kuriuos jūs gaunate iš vCase atidarymo yra
                      išsiunčiami į jūsų {' '}
                      <a href="//trade.opskins.com/inventory" target="_blank">
                        OPSkins ExpressTrade Inventory
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Ką aš galiu daryti su VGO daiktais, po to kai juos gaunu?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Jūs galite mainyti savo VGO daiktus su kitu VGO naudotoju nemokamai
                      per VGO.gg, jeigu turite jų VGO mainymosi URL. Jūs
                      taip pat juos galite parduoti bet kurioje parduotuvėje, kuri priima VGO daiktus.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kokie yra  vCase atidarymų šansai?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VCases atidarinėjimo šansai yra vidutiniškai 3x geresni, negu
                      Steam dėžių atidarinėjimo šansai.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kaip man žinoti, jog vCase šansai yra tokie pat, kaip jūs
                        teigiate?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Jūs galite peržiūrėti visų atidarymų rezultatus, kadangi jie yra išsaugomi tarp
                      Ethereum blockchain. Kiekvienas sukurtas daiktas veda į
                      blockchain įvykusį sandorį, siekiant visiško saugumo. Dėl šios
                      priežasties, VGO daiktai taip pat negali buti dubliuojami.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Ar aš galiu prarasti savo VGO daiktus, ar gali steam uždaryti VGO?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Ne. Kadangi VGO naudoja blockchain technologiją, nei Steam,
                      nei kas kitas gali jį uždaryti. Jeigu OPSkins ExpressTrade
                      puslapis rytoj dingtų, daiktų informacija vistiek nedingtų
                      ir galėtų būti suderinami su grafika ir parodyti unikalias
                      daiktų savybes.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kodėl yra minimalus dėžių atidarymo kiekis?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Dėl to, jog vCase šiuo metu dirba su Ethereum blockchain
                      ir dėl papildomų ETH mokesčių, yra minimalus dėžių atidarymo
                      kiekis. Kai mes persikelsime į WAX Blockchain, šie
                      minimalūs kiekiai pasikeis.
                    </div>
                  </div>
                </div>
                <h2 className="sub-header">
                  Kaip aš galiu padaryti savo vCase dėžių atidarymo puslapį?
                </h2>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Ar galiu aš sukurti savo vCase.gg dėžių atidarinėjimo puslapį?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Taip. vCase kodas yra atviras ir prieinamas tarp mūsų:{' '}
                      <a href="https://github.com/vgoskins" taget="_blank">
                        GitHub
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Ar yra bendradarbiavimo sistema vCase puslapiams?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Taip. Visi puslapiai kurie naudosis vCase funkcionalumu
                      atutomatiškai gaus 5% bendradarbiavimo atlygį, sumokamą jūms
                      realiu-laiku naudojant ETH. Kadangi vCase bendradarbiavimo programa naudoja
                      išmanųjį-kontraktą, kai kas nors panaudoja vKey, jog atidarytų
                      vCase jūsų puslapyje, jūsų atlygis iškart bus atsiųstas į jūsų Ethereum adresą.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqList;
