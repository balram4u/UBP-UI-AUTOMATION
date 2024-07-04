const SECTION = "#section-drop-down";
const SERVICE_BUY_ASSOCIATION = "//label[text()='Service Buy Association']/../div/input";
const CITY_OR_PROVINCE = "#city_province-drop-down";
const DISTRICT_OR_SUM = "#district_sum-drop-down";
const KHOROO_OR_SECTION = "#khoroo_section-drop-down";
const STREET = "#street-input-box";
const CITY = "#city-input-box";
const FLAT_NO = "#flat_no-input";
const DOOR_NO = "#door_no-input";
const LOCATION_TYPE = "#location_type-drop-down";
const ADDRESS = "#address-input";
const AREA = "#area-drop-down";
const REGION = "#region-drop-down";
const SALES_AREA = '#sales-area-drop-down';
const COORD_X = "#coord_x-input";
const COORD_Y = "#coord_y-input";
const NUM_OF_EMPLOYEES = "#employee_no-input";
const AREA_SIZE = "#area_size-drop-down";
const OPERATIONS_START_DATE = "#ops_start_date-datepicker";
const OTHER_BRANCHES_CHECK = "#other_branches-drop-down";
const NUMBER_OF_BRANCHES = "#branches_number-input";
const LOCATION_OF_BRANCHES = "#branches_location-input";
const SUBMIT_BUTTON = "//span[text()='Submit']";

class ResellerLocationInfo {
  static selectSection(section) {
    if (section !== "") {
      cy.log("Select section");
      cy.get(SECTION).select(section);
    }
  }

  static selectServiceBuyAsspciation(association) {
    if (association !== "") {
      cy.log("Select service buy association");
      cy.xpath(SERVICE_BUY_ASSOCIATION).type(association).type('{downArrow}')
        .type('{enter}');
    }
  }

  static selectCityOrProvince(cityOrProvince) {
    if (cityOrProvince !== "") {
      cy.log("Select city of province");
      cy.get(CITY_OR_PROVINCE).select(cityOrProvince);
    }
  }

  static selectDistrict(district) {
    if (district !== "") {
      cy.log("Select city of province");
      cy.get(DISTRICT_OR_SUM).select(district);
    }
  }

  static selectKhooroOrSection(section) {
    if (section !== "") {
      cy.log("select khoroo or section");
      cy.get(KHOROO_OR_SECTION).select(section);
    }
  }

  static enterStreet(street) {
    if (street !== "") {
      cy.log("ENTER STREET");
      cy.get(STREET).clear().type(street);
    }
  }

  static enterCity(city) {
    if (city !== "") {
      cy.log("ENTER CITY");
      cy.get(CITY).clear().type(city);
    }
  }

  static enterFlatNo(flat) {
    if (flat !== "") {
      cy.log("eNTER FLAT NO");
      cy.get(FLAT_NO).type(flat);
    }
  }

  static enterDoorNo(door) {
    if (door !== "") {
      cy.log("Enter door number");
      cy.get(DOOR_NO).type(door);
    }
  }

  static selectLocationType(locType) {
    if (locType !== "") {
      cy.log("Enter location type");
      cy.get(LOCATION_TYPE).select(locType);
    }
  }

  static typeAddress(address) {
    if (address !== "") {
      cy.log("enter address");
      cy.get(ADDRESS).type(address);
    }
  }

  static selectArea(area) {
    if (area !== "") {
      cy.log("select area");
      cy.get(AREA).select(area);
    }
  }

  static selectRegion(region) {
    if (region !== "") {
      cy.log("select region");
      cy.get(REGION).select(region);
    }
  }

  static selectSalesArea(salesArea) {
    if (salesArea !== "") {
      cy.log("select region");
      cy.get(SALES_AREA).select(salesArea);
    }
  }

  static typeCoordinateX(coordX) {
    if (coordX !== "") {
      cy.log("Enter coordinate X");
      cy.get(COORD_X).type(coordX);
    }
  }

  static typeCoordinateY(coordY) {
    if (coordY !== "") {
      cy.log("Enter coordinate Y");
      cy.get(COORD_Y).type(coordY);
    }
  }

  static enterNumOfEmployees(no) {
    if (no !== "") {
      cy.log("Enter num. of employees");
      cy.get(NUM_OF_EMPLOYEES).type(no);
    }
  }

  static selectAreaSIze(size) {
    if (size !== "") {
      cy.log("Select area size");
      cy.get(AREA_SIZE).select(size);
    }
  }

  static operationStartDate(opStartDate) {
    if (opStartDate !== "") {
      cy.log("Enter operation start date");
      cy.get(OPERATIONS_START_DATE).type(opStartDate);
    }
  }

  static otherBranchesChcek(booleanValue) {
    if (booleanValue !== "") {
      cy.log("Select other branches check?");
      cy.get(OTHER_BRANCHES_CHECK).select(booleanValue);
    }
  }

  static enterNumOfBranches(no) {
    if (no !== "") {
      cy.log("enter num of branches");
      cy.get(NUMBER_OF_BRANCHES).type(no);
    }
  }

  static enterLocationOfBrnaches(loc) {
    if (loc !== "") {
      cy.log("Enter loc of branches");
      cy.get(LOCATION_OF_BRANCHES).type(loc);
    }
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.wait(1000);
    cy.xpath(SUBMIT_BUTTON).click();
  }
}
export default ResellerLocationInfo;
