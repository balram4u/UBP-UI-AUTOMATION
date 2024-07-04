// dist,sub-dist,resellers,BA address
const STREET = "//input[@name='street']";
const CITY = "//input[@name='city']";
const COUNTRY = "//input[@name='extraFields.country']";
const DISTRICT = "//input[@name='extraFields.district']";
const STATE = "//input[@name='extraFields.state']";
// HQ address
// const ADDRESS = "//input[@name='street']";
const POSTAL_CODE = "//input[@name='zipcode']";
// const HQ_CITY = "//input[@name='city']";
const ALTERANATE_ADDRESS = "//input[@name='extraFields.alternateAddress']";
const ALTERANATE_POSTAL_CODE = "//input[@name='extraFields.alternateZip']";
const ALTERNATE_CITY = "//input[@name='extraFields.alternateCity']";
// Branch address info
// const BRANCH_ADDRESS = "//input[@name='street']";
// const BRANCH_POSTAL_CODE = "//input[@name='zipcode']";
// const BRANCH_CITY = "//input[@name='city']";
const BRANCH_LATTITUDE = "//input[@name='extraFields.latitude']";
const BRANCH_LONGITUDE = "//input[@name='extraFields.longitude']";
const BRANCH_REGION = "(//input[@autocomplete='off'])[2]";
const BRANCH_SALES_AREA = "//input[@id='extraFields-salesArea-autocomplete']";
const BRANCH_CLUSTER = "//input[@id='combo-box-extraFields.cluster']";
// dsa address
const DSA_ROUTE = "//input[@id='combo-box-route']";
const ADDRESS = "//input[@name='extraFields.addressInfo']";
// const ADDRESS = "//input[@name='extraFields.address']";
const ADDRESS2 = "//input[@id='address-input-box']";

class addressInfo {
  static typeStreet(street) {
    cy.log(`fill in hq data: ${street}`);
    if (street !== " ") {
      cy.log('street selection block');
      cy.xpath(STREET).clear();
      cy.xpath(STREET).type(street).should('have.value', street);
    }
  }

  static typeCity(city) {
    cy.log(`fill in hq data: ${city}`);
    if (city !== " ") {
      cy.log('city selection block');
      cy.xpath(CITY).clear();
      cy.xpath(CITY).type(city).should('have.value', city);
    }
  }

  static typeCountry(country) {
    if (country !== "") {
      cy.log('enter country');
      cy.xpath(COUNTRY).clear().type(country);
    }
  }

  static typeDistrict(district) {
    cy.log(`fill in hq data: ${district}`);
    if (district !== " ") {
      cy.log('district selection block');
      cy.xpath(DISTRICT).clear();
      cy.xpath(DISTRICT).clear().type(district).should('have.value', district);
    }
  }

  static typeState(state) {
    cy.log(`fill in hq data: ${state}`);
    if (state !== " ") {
      cy.log('state selection block');
      cy.xpath(STATE).clear();
      cy.xpath(STATE).clear().type(state).should('have.value', state);
    }
  }

  static selectRegion(region) {
    cy.log(`fill in hq data: ${region}`);
    if (region !== " ") {
      cy.log('region selection block');
      const REGION = `//input[@value='${region}']`;
      cy.xpath(REGION).click();
    }
  }

  // HQ ADDRESS METHODS
  static typeHQAddress(address) {
    cy.log(`Parent Category Name is: ${address}`);
    if (address !== " ") {
      cy.log('address selection block');
      // cy.xpath(ADDRESS).clear();
      // cy.xpath(ADDRESS).type(address).should('have.value', address);
      cy.xpath(STREET).clear();
      cy.xpath(STREET).type(address).should('have.value', address);
    }
  }

  static typeHQPostalCode(postalCode) {
    cy.log(`Parent Category Name is: ${postalCode}`);
    if (postalCode !== " ") {
      cy.log('postalCode selection block');
      cy.xpath(POSTAL_CODE).clear();
      cy.xpath(POSTAL_CODE).type(postalCode).should('have.value', postalCode);
    }
  }

  static typeHQCity(hqcity) {
    cy.log(`Parent Category Name is: ${hqcity}`);
    if (hqcity !== " ") {
      cy.log('city selection block');
      // cy.xpath(HQ_CITY).clear();
      // cy.xpath(HQ_CITY).type(hqcity).should('have.value', hqcity);
      cy.xpath(CITY).clear();
      cy.xpath(CITY).type(hqcity).should('have.value', hqcity);
    }
  }

  static typeHQAlternateAddress(alternateAddress) {
    cy.log(`Parent Category Name is: ${alternateAddress}`);
    if (alternateAddress !== " ") {
      cy.log('alternateAddress selection block');
      cy.xpath(ALTERANATE_ADDRESS).clear();
      cy.xpath(ALTERANATE_ADDRESS).type(alternateAddress).should('have.value', alternateAddress);
    }
  }

  static typeHQAlternatePostalcode(alternatePostalcode) {
    cy.log(`Parent Category Name is: ${alternatePostalcode}`);
    if (alternatePostalcode !== " ") {
      cy.log('alternatePostalcode selection block');
      cy.xpath(ALTERANATE_POSTAL_CODE).clear();
      cy.xpath(ALTERANATE_POSTAL_CODE).type(alternatePostalcode).should('have.value', alternatePostalcode);
    }
  }

  static typeHQAlternateCity(alternateCity) {
    cy.log(`Parent Category Name is: ${alternateCity}`);
    if (alternateCity !== " ") {
      cy.log('alternateCity selection block');
      cy.xpath(ALTERNATE_CITY).clear();
      cy.xpath(ALTERNATE_CITY).type(alternateCity).should('have.value', alternateCity);
    }
  }

  static typeAddress(branchAddress) {
    cy.log(`Parent Category Name is: ${branchAddress}`);
    if (branchAddress !== " ") {
      cy.log('branchAddress selection block');
      // cy.xpath(BRANCH_ADDRESS).clear();
      // cy.xpath(BRANCH_ADDRESS).type(branchAddress).should('have.value', branchAddress);
      cy.xpath(ADDRESS).type(branchAddress);
    }
  }

  static typeAddress2(branchAddress) {
    cy.log(`Parent Category Name is: ${branchAddress}`);
    if (branchAddress !== " ") {
      cy.log('branchAddress selection block');
      // cy.xpath(BRANCH_ADDRESS).clear();
      // cy.xpath(BRANCH_ADDRESS).type(branchAddress).should('have.value', branchAddress);
      cy.xpath(ADDRESS2).type(branchAddress);
    }
  }

  static typeBranchpostalCode(branchCode) {
    cy.log(`Parent Category Name is: ${branchCode}`);
    if (branchCode !== " ") {
      cy.log('branchCode selection block');
      // cy.xpath(BRANCH_POSTAL_CODE).clear();
      // cy.xpath(BRANCH_POSTAL_CODE).type(branchCode).should('have.value', branchCode);
      cy.xpath(POSTAL_CODE).clear();
      cy.xpath(POSTAL_CODE).type(branchCode).should('have.value', branchCode);
    }
  }

  static typeBranchCity(branchCity) {
    cy.log(`Parent Category Name is: ${branchCity}`);
    if (branchCity !== " ") {
      cy.log('branchCity selection block');
      // cy.xpath(BRANCH_CITY).clear();
      // cy.xpath(BRANCH_CITY).type(branchCity).should('have.value', branchCity);
      cy.xpath(CITY).clear();
      cy.xpath(CITY).type(branchCity).should('have.value', branchCity);
    }
  }

  static selectBranchRegion(branchRegion) {
    cy.log(`Parent Category Name is: ${branchRegion}`);
    if (branchRegion !== "") {
      cy.log('branchCity selection block');
      cy.xpath(BRANCH_REGION).type(branchRegion);
      cy.contains(branchRegion).click();
    }
  }

  static selectBranchSalesArea(branchSalesArea) {
    cy.log(`sales area: ${branchSalesArea}`);
    if (branchSalesArea !== "") {
      cy.log('branchSalesArea selection block');
      cy.xpath(BRANCH_SALES_AREA).type(branchSalesArea);
      cy.contains(branchSalesArea).click();
    }
  }

  static selectBranchCluster(branchCluster) {
    cy.log(`Parent Category Name is: ${branchCluster}`);
    if (branchCluster !== "") {
      cy.log('branchCluster selection block');
      cy.xpath(BRANCH_CLUSTER).type(branchCluster);
      cy.contains(branchCluster).click();
    }
  }

  static typeBranchLattitude(branchLattitude) {
    cy.log(`Parent Category Name is: ${branchLattitude}`);
    if (branchLattitude !== "") {
      cy.log('branchLattitude selection block');
      cy.xpath(BRANCH_LATTITUDE).clear();
      cy.xpath(BRANCH_LATTITUDE).type(branchLattitude).should('have.value', branchLattitude);
    }
  }

  static typeBranchLongitude(branchLongitude) {
    cy.log(`Parent Category Name is: ${branchLongitude}`);
    if (branchLongitude !== "") {
      cy.log('branchLongitude selection block');
      cy.xpath(BRANCH_LONGITUDE).clear();
      cy.xpath(BRANCH_LONGITUDE).type(branchLongitude).should('have.value', branchLongitude);
    }
  }

  static typeDsaAddress(dsaAddress) {
    cy.log(`fill in hq data: ${dsaAddress}`);
    if (dsaAddress !== " ") {
      cy.log('dsaAddress selection block');
      cy.xpath(STREET).type(dsaAddress).should('have.value', dsaAddress);
    }
  }

  static typeDsaPostalCode(dsaPostalCode) {
    cy.log(`fill in hq data: ${dsaPostalCode}`);
    if (dsaPostalCode !== " ") {
      cy.log('dsaPostalCode selection block');
      cy.xpath(POSTAL_CODE).type(dsaPostalCode).should('have.value', dsaPostalCode);
    }
  }

  static typeDsaCity(dsaCity) {
    cy.log(`fill in hq data: ${dsaCity}`);
    if (dsaCity !== " ") {
      cy.log('dsaCity selection block');
      // cy.xpath(HQ_CITY).type(dsaCity).should('have.value', dsaCity);
      cy.xpath(CITY).type(dsaCity).should('have.value', dsaCity);
    }
  }

  static selectDsaRegion(dsaRegion) {
    cy.log(`fill in hq data: ${dsaRegion}`);
    if (dsaRegion !== " ") {
      cy.log('dsaRegion selection block');
      const BRANCH_REGION = `//input[@name='extraFields.region' and @value='${dsaRegion}']`;
      cy.xpath(BRANCH_REGION).click();
    }
  }

  static selectDsaSalesArea(dsaSalesArea) {
    cy.log(`fill in hq data: ${dsaSalesArea}`);
    if (dsaSalesArea !== " ") {
      cy.log('dsaSalesArea selection block');
      const BRANCH_SALES_AREA = `//input[@name='extraFields.salesArea' and @value='${dsaSalesArea}']`;
      cy.xpath(BRANCH_SALES_AREA).click();
    }
  }

  static selectDsaCluster(dsaCluster) {
    cy.log(`fill in hq data: ${dsaCluster}`);
    if (dsaCluster !== " ") {
      cy.log('dsaCluster selection block');
      const BRANCH_CLUSTER = `//input[@name='extraFields.cluster' and @value = '${dsaCluster}']`;
      cy.xpath(BRANCH_CLUSTER).click();
    }
  }

  static selectDsaRoute(dsaRoute) {
    cy.log(`fill in hq data: ${dsaRoute}`);
    if (dsaRoute !== " ") {
      cy.log('dsaRoute selection block');
      cy.xpath(DSA_ROUTE).type(dsaRoute);
      cy.contains(dsaRoute).click();
    }
  }

  static typeDsaLattitude(dsaLattitude) {
    cy.log(`fill in hq data: ${dsaLattitude}`);
    if (dsaLattitude !== " ") {
      cy.log('dsaLattitude selection block');
      cy.xpath(BRANCH_LATTITUDE).clear();
      cy.xpath(BRANCH_LATTITUDE).type(dsaLattitude).should('have.value', dsaLattitude);
    }
  }

  static typedsaLongitude(dsaLongititude) {
    cy.log(`fill in hq data: ${dsaLongititude}`);
    if (dsaLongititude !== " ") {
      cy.log('dsaLongititude selection block');
      cy.xpath(BRANCH_LONGITUDE).clear();
      cy.xpath(BRANCH_LONGITUDE).type(dsaLongititude).should('have.value', dsaLongititude);
    }
  }

  static typePOSAddress(posAddress) {
    cy.log(`fill in hq data: ${posAddress}`);
    if (posAddress !== " ") {
      cy.log('posAddress selection block');
      cy.xpath(STREET).type(posAddress).should('have.value', posAddress);
    }
  }

  static typePOSPostalCode(posPostalCode) {
    cy.log(`fill in hq data: ${posPostalCode}`);
    if (posPostalCode !== " ") {
      cy.log('posPostalCode selection block');
      cy.xpath(POSTAL_CODE).type(posPostalCode).should('have.value', posPostalCode);
    }
  }

  static typePOSCity(posCity) {
    cy.log(`fill in hq data: ${posCity}`);
    if (posCity !== " ") {
      cy.log('posCity selection block');
      cy.xpath(CITY).type(posCity).should('have.value', posCity);
    }
  }

  static selectPOSRegion(posRegion) {
    cy.log(`fill in hq data: ${posRegion}`);
    if (posRegion !== " ") {
      cy.log('posRegion selection block');
      const REGION = `//input[@value='${posRegion}']`;
      cy.xpath(REGION).click();
    }
  }

  static selectPOSSalesArea(posSalesArea) {
    cy.log(`fill in hq data: ${posSalesArea}`);
    if (posSalesArea !== " ") {
      cy.log('posSalesArea selection block');
      const BRANCH_SALES_AREA = `//input[@name='extraFields.salesArea' and @value='${posSalesArea}']`;
      cy.xpath(BRANCH_SALES_AREA).click();
    }
  }

  static selectPOSCluster(posCluster) {
    cy.log(`fill in hq data: ${posCluster}`);
    if (posCluster !== " ") {
      cy.log('posCluster selection block');
      const BRANCH_CLUSTER = `//input[@name='extraFields.cluster' and @value = '${posCluster}']`;
      cy.xpath(BRANCH_CLUSTER).click();
    }
  }

  static selectPOSRoute(posRoute) {
    cy.log(`fill in hq data: ${posRoute}`);
    if (posRoute !== " ") {
      cy.log('posRoute selection block');
      cy.xpath(DSA_ROUTE).type(posRoute);
      cy.contains(posRoute).click();
    }
  }

  static typePOSLongitude(posLongitude) {
    cy.log(`fill in hq data: ${posLongitude}`);
    if (posLongitude !== " ") {
      cy.log('posRoute selection block');
      cy.xpath(BRANCH_LATTITUDE).type(posLongitude).should('have.value', posLongitude);
    }
  }

  static typePOSLattitude(posLattitude) {
    cy.log(`fill in hq data: ${posLattitude}`);
    if (posLattitude !== " ") {
      cy.log('posLattitude selection block');
      cy.xpath(BRANCH_LONGITUDE).type(posLattitude).should('have.value', posLattitude);
    }
  }

  // mini store
  static typeMiniStoreStreet(miniStoreStreet) {
    cy.log(`fill in hq data: ${miniStoreStreet}`);
    if (miniStoreStreet !== " ") {
      cy.log('miniStoreStreet selection block');
      cy.xpath(STREET).type(miniStoreStreet).should('have.value', miniStoreStreet);
    }
  }

  static typeMiniStoreCity(miniStoreCity) {
    cy.log(`fill in hq data: ${miniStoreCity}`);
    if (miniStoreCity !== " ") {
      cy.log('miniStoreCity selection block');
      cy.xpath(CITY).type(miniStoreCity).should('have.value', miniStoreCity);
    }
  }

  static typeMiniStoreCountry(miniStoreCountry) {
    cy.log(`fill in hq data: ${miniStoreCountry}`);
    if (miniStoreCountry !== " ") {
      cy.log('miniStoreCountry selection block');
      cy.xpath(COUNTRY).type(miniStoreCountry).should('have.value', miniStoreCountry);
    }
  }

  static selectMiniStoreRegion(miniStoreRegion) {
    cy.log(`fill in hq data: ${miniStoreRegion}`);
    if (miniStoreRegion !== " ") {
      cy.log('miniStoreRegion selection block');
      const REGION = `//input[@value='${miniStoreRegion}']`;
      cy.xpath(REGION).click();
    }
  }

  static selectMiniStoreSalesArea(miniStoreSalesArea) {
    cy.log(`fill in hq data: ${miniStoreSalesArea}`);
    if (miniStoreSalesArea !== " ") {
      cy.log('miniStoreSalesArea selection block');
      const BRANCH_SALES_AREA = `//input[@name='extraFields.salesArea' and @value='${miniStoreSalesArea}']`;
      cy.xpath(BRANCH_SALES_AREA).click();
    }
  }

  static selectMiniStoreLattitude(miniStoreLattitude) {
    cy.log(`fill in hq data: ${miniStoreLattitude}`);
    if (miniStoreLattitude !== " ") {
      cy.log('miniStoreLattitude selection block');
      cy.xpath(BRANCH_LATTITUDE).type(miniStoreLattitude).should('have.value', miniStoreLattitude);
    }
  }

  static selectMiniStoreLongitude(miniStoreLongitude) {
    cy.log(`fill in hq data: ${miniStoreLongitude}`);
    if (miniStoreLongitude !== " ") {
      cy.log('miniStoreLongitude selection block');
      cy.xpath(BRANCH_LONGITUDE).type(miniStoreLongitude).should('have.value', miniStoreLongitude);
    }
  }
}
export default addressInfo;
