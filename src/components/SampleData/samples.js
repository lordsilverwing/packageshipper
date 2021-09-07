const sample1 = 
    {
        ShipmentRatingOptions:{
           UserLevelDiscountIndicator:"FALSE"
        },
        Shipper:{
           Name:"Billy Blanks",
           ShipperNumber:" ",
           Address:{
              AddressLine:"366 Robin LN SE",
              City:"Marietta",
              StateProvinceCode:"GA",
              PostalCode:"30067",
              CountryCode:"US"
           }
        },
        ShipTo:{
           Name:"Sarita Lynn",
           Address:{
              AddressLine:"355 West San Fernando Street",
              City:"San Jose",
              StateProvinceCode:"CA",
              PostalCode:"95113",
              CountryCode:"US"
           }
        },
        Service:{
           Code:"03"
        },
        ShipmentTotalWeight:{
           UnitOfMeasurement:{
              Code:"LBS",
              Description:"Pounds"
           },
           Weight:"10"
        },
        Package:{
           PackagingType:{
              Code:"02"
           },
           Dimensions:{
              UnitOfMeasurement:{
                 Code:"IN"
              },
              Length:"10",
              Width:"7",
              Height:"5"
           },
           PackageWeight:{
              UnitOfMeasurement:{
                 Code:"LBS"
              },
              Weight:"7"
           }
        }
}

const sample2 = 
    {
        ShipmentRatingOptions:{
           UserLevelDiscountIndicator:"FALSE"
        },
        Shipper:{
           Name:"Joe Bob",
           ShipperNumber:" ",
           Address:{
              AddressLine:"2203 S Olive St",
              City:"Denver",
              StateProvinceCode:"CO",
              PostalCode:"80224",
              CountryCode:"US"
           }
        },
        ShipTo:{
           Name:"Ralph Package",
           Address:{
              AddressLine:"2732 Brunswick Ave S",
              City:"Minneapolis",
              StateProvinceCode:"MN",
              PostalCode:"55416",
              CountryCode:"US"
           }
        },
        Service:{
           Code:"02"
        },
        ShipmentTotalWeight:{
           UnitOfMeasurement:{
              Code:"LBS",
              Description:"Pounds"
           },
           Weight:"2"
        },
        Package:{
           PackagingType:{
              Code:"01"
           },
           Dimensions:{
              UnitOfMeasurement:{
                 Code:"IN"
              },
              Length:"8",
              Width:"5",
              Height:"5"
           },
           PackageWeight:{
              UnitOfMeasurement:{
                 Code:"LBS"
              },
              Weight:"1"
           }
        }
};

const sample3 = 
    {
        ShipmentRatingOptions:{
           UserLevelDiscountIndicator:"FALSE"
        },
        Shipper:{
           Name:"Emilia Shipper",
           ShipperNumber:" ",
           Address:{
              AddressLine:"914 Meadowrue Dr",
              City:"Browns Summit",
              StateProvinceCode:"NC",
              PostalCode:"27214",
              CountryCode:"US"
           }
        },
        ShipTo:{
           Name:"Florida Guy",
           Address:{
              AddressLine:"1591 90th Hwy",
              City:"Chipley",
              StateProvinceCode:"FL",
              PostalCode:"32428",
              CountryCode:"US"
           }
        },
        Service:{
           Code:"03"
        },
        ShipmentTotalWeight:{
           UnitOfMeasurement:{
              Code:"LBS",
              Description:"Pounds"
           },
           Weight:"25"
        },
        Package:{
           PackagingType:{
              Code:"03"
           },
           Dimensions:{
              UnitOfMeasurement:{
                 Code:"IN"
              },
              Length:"20",
              Width:"7",
              Height:"7"
           },
           PackageWeight:{
              UnitOfMeasurement:{
                 Code:"LBS"
              },
              Weight:"20"
           }
        }
};


module.exports = {
    sample1,
    sample2,
    sample3
};