import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #ffce2d;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TermsAndConditions = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center" }}>Termeni și Condiții</h1>
            <h3 style={{ margin: "20px 0" }}>Entitate Legala</h3>
            <span>
              Site-ul ratustepebega.ro este un proiect caritabil al Asociatiei
              Clubul Rotaract Timisoara, Districtul 2241 Romania si Republica
              Moldova. Donatiile online sunt efectuate in contul Asociatiei
              ASOCIATIA CLUB ROTARACT TIMISOARA, CUI 14372896, inregistrata la
              Judecatoriea Timisoara, cu in Timisoara, Str. Eugeniu de Savoya,
              nr. 6, SAD 1, jud. Timis.
            </span>
            <h3 style={{ margin: "20px 0" }}>Plati Online</h3>
            <span>
              Platile online sunt procesate de catre Mobilpay (NETOPIA S.R.L.)
              intr-un mediu securizat in conformitate cu legislatia Romana in
              numele Asociatiei Rotary Club Nord. Completand formularul de
              donatii, veti fi redirectionat catre procesatorul de plati pentru
              a efectua plata. Cardurile acceptate sunt cele emise sub sigla
              VISA si Mastercard. Salveaza.org nu percepe niciun comision
              suplimentare pentru tranzactii. Pentru finalizarea corecta a
              tranzactiei, trebuie introduse datele necesare autorizarii
              tranzactiei in platorma de plati Mobilpay. In cazul in care cardul
              este asociat unui cont in alta moneda decat RON, tranzactiile se
              efectueaza in lei, la cursul de schimb al bancii emitente pentru
              cardul respectiv. Procesarea datelor de card se face in mod
              exclusiv prin intermediul platformei de plata Mobilpay.
              Salveaza.org nu solicita si nu stocheaza nici un fel de detalii
              referitoare la cardul Dvs. Tranzactiile Mobilpay sunt procesate
              3D-Secure
            </span>
            <h3 style={{ margin: "20px 0" }}>Livrare</h3>
            <span>
              Donatia ta nu consta in produse fizice livrabile. Confirmarea
              donatiei se va efectua automat prin email la adresa specificata de
              tine.
            </span>
            <h3 style={{ margin: "20px 0" }}>Returnare si Anulare</h3>
            <span>
              Dupa confirmarea platii este imposibila anularea sau returnarea
              donatiei efectuate.
            </span>
            <h3 style={{ margin: "20px 0" }}>Contact</h3>
            <span>
              Pentru orice problema legata de donatii sau daca doresti sa ne
              oferi ajutor, iti stam la dispozitie la adresa de email
              clubrotaract.timisoara@gmail.com
            </span>
          </div>
        </Wrap>
      </Container>
    </Section>
  );
};

export default TermsAndConditions;
