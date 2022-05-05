module.exports = function (API) {
  for (const modelName of [
    'Thing', // base of most other things
    'HTML',
    '3DModel',
    'AMRadioChannel',
    'APIReference',
    'Abdomen',
    'AboutPage',
    'AcceptAction',
    'Accommodation',
    'AccountingService',
    'AchieveAction',
    'Action',
    'ActionAccessSpecification',
    'ActionStatusType',
    'ActivateAction',
    'ActivationFee',
    'ActiveActionStatus',
    'ActiveNotRecruiting',
    'AddAction',
    'AdministrativeArea',
    'AdultEntertainment',
    'AdultOrientedEnumeration',
    'AdvertiserContentArticle',
    'AerobicActivity',
    'AggregateOffer',
    'AggregateRating',
    'AgreeAction',
    'Airline',
    'Airport',
    'AlbumRelease',
    'AlcoholConsideration',
    'AlignmentObject',
    'AllWheelDriveConfiguration',
    'AllergiesHealthAspect',
    'AllocateAction',
    'AmpStory',
    'AmusementPark',
    'AnaerobicActivity',
    'AnalysisNewsArticle',
    'AnatomicalStructure',
    'AnatomicalSystem',
    'AndroidPlatform',
    'Anesthesia',
    'AnimalShelter',
    'Answer',
    'Apartment',
    'ApartmentComplex',
    'Appearance',
    'AppendAction',
    'ApplyAction',
    'ApprovedIndication',
    'Aquarium',
    'ArchiveComponent',
    'ArchiveOrganization',
    'ArriveAction',
    'ArtGallery',
    'Artery',
    'Article',
    'AskAction',
    'AskPublicNewsArticle',
    'AssessAction',
    'AssignAction',
    'Atlas',
    'Attorney',
    'Audience',
    'AudioObject',
    'AudioObjectSnapshot',
    'Audiobook',
    'AudiobookFormat',
    'AuthoritativeLegalValue',
    'AuthorizeAction',
    'AutoBodyShop',
    'AutoDealer',
    'AutoPartsStore',
    'AutoRental',
    'AutoRepair',
    'AutoWash',
    'AutomatedTeller',
    'AutomotiveBusiness',
    'Ayurvedic',
    'BackOrder',
    'BackgroundNewsArticle',
    'Bacteria',
    'Bakery',
    'Balance',
    'BankAccount',
    'BankOrCreditUnion',
    'BarOrPub',
    'Barcode',
    'BasicIncome',
    'Beach',
    'BeautySalon',
    'BedAndBreakfast',
    'BedDetails',
    'BedType',
    'BefriendAction',
    'BenefitsHealthAspect',
    'BikeStore',
    'BioChemEntity',
    'Blog',
    'BlogPosting',
    'BloodTest',
    'BoardingPolicyType',
    'BoatReservation',
    'BoatTerminal',
    'BoatTrip',
    'BodyMeasurementArm',
    'BodyMeasurementBust',
    'BodyMeasurementChest',
    'BodyMeasurementFoot',
    'BodyMeasurementHand',
    'BodyMeasurementHead',
    'BodyMeasurementHeight',
    'BodyMeasurementHips',
    'BodyMeasurementInsideLeg',
    'BodyMeasurementNeck',
    'BodyMeasurementTypeEnumeration',
    'BodyMeasurementUnderbust',
    'BodyMeasurementWaist',
    'BodyMeasurementWeight',
    'BodyOfWater',
    'Bone',
    'Book',
    'BookFormatType',
    'BookSeries',
    'BookStore',
    'BookmarkAction',
    'Boolean',
    'BorrowAction',
    'BowlingAlley',
    'BrainStructure',
    'Brand',
    'BreadcrumbList',
    'Brewery',
    'Bridge',
    'BroadcastChannel',
    'BroadcastEvent',
    'BroadcastFrequencySpecification',
    'BroadcastRelease',
    'BroadcastService',
    'BrokerageAccount',
    'BuddhistTemple',
    'BusOrCoach',
    'BusReservation',
    'BusStation',
    'BusStop',
    'BusTrip',
    'BusinessAudience',
    'BusinessEntityType',
    'BusinessEvent',
    'BusinessFunction',
    'BusinessSupport',
    'BuyAction',
    'CDCPMDRecord',
    'CDFormat',
    'CT',
    'CableOrSatelliteService',
    'CafeOrCoffeeShop',
    'Campground',
    'CampingPitch',
    'Canal',
    'CancelAction',
    'Car',
    'CarUsageType',
    'Cardiovascular',
    'CardiovascularExam',
    'CaseSeries',
    'Casino',
    'CassetteFormat',
    'CategoryCode',
    'CategoryCodeSet',
    'CatholicChurch',
    'CausesHealthAspect',
    'Cemetery',
    'Chapter',
    'CharitableIncorporatedOrganization',
    'CheckAction',
    'CheckInAction',
    'CheckOutAction',
    'CheckoutPage',
    'ChemicalSubstance',
    'ChildCare',
    'ChildrensEvent',
    'Chiropractic',
    'ChooseAction',
    'Church',
    'City',
    'CityHall',
    'CivicStructure',
    'Claim',
    'ClaimReview',
    'Class',
    'CleaningFee',
    'Clinician',
    'Clip',
    'ClothingStore',
    'CoOp',
    'Code',
    'CohortStudy',
    'Collection',
    'CollectionPage',
    'CollegeOrUniversity',
    'ComedyClub',
    'ComedyEvent',
    'ComicCoverArt',
    'ComicIssue',
    'ComicSeries',
    'ComicStory',
    'Comment',
    'CommentAction',
    'CommentPermission',
    'CommunicateAction',
    'CommunityHealth',
    'CompilationAlbum',
    'CompleteDataFeed',
    'Completed',
    'CompletedActionStatus',
    'CompoundPriceSpecification',
    'ComputerLanguage',
    'ComputerStore',
    'ConfirmAction',
    'Consortium',
    'ConsumeAction',
    'ContactPage',
    'ContactPoint',
    'ContactPointOption',
    'ContagiousnessHealthAspect',
    'Continent',
    'ControlAction',
    'ConvenienceStore',
    'Conversation',
    'CookAction',
    'Corporation',
    'CorrectionComment',
    'Country',
    'Course',
    'CourseInstance',
    'Courthouse',
    'CoverArt',
    'CovidTestingFacility',
    'CreateAction',
    'CreativeWork',
    'CreativeWorkSeason',
    'CreativeWorkSeries',
    'CreditCard',
    'Crematorium',
    'CriticReview',
    'CrossSectional',
    'CssSelectorType',
    'CurrencyConversionService',
    'DDxElement',
    'DJMixAlbum',
    'DVDFormat',
    'DamagedCondition',
    'DanceEvent',
    'DanceGroup',
    'DangerousGoodConsideration',
    'DataCatalog',
    'DataDownload',
    'DataFeed',
    'DataFeedItem',
    'DataType',
    'Dataset',
    'Date',
    'DateTime',
    'DatedMoneySpecification',
    'DayOfWeek',
    'DaySpa',
    'DeactivateAction',
    'DecontextualizedContent',
    'DefenceEstablishment',
    'DefinedRegion',
    'DefinedTerm',
    'DefinedTermSet',
    'DefinitiveLegalValue',
    'DeleteAction',
    'DeliveryChargeSpecification',
    'DeliveryEvent',
    'DeliveryMethod',
    'DeliveryTimeSettings',
    'Demand',
    'DemoAlbum',
    'DemoGameAvailability',
    'Dentist',
    'Dentistry',
    'DepartAction',
    'DepartmentStore',
    'DepositAccount',
    'Dermatologic',
    'Dermatology',
    'DesktopWebPlatform',
    'DiabeticDiet',
    'Diagnostic',
    'DiagnosticLab',
    'DiagnosticProcedure',
    'Diet',
    'DietNutrition',
    'DietarySupplement',
    'DigitalAudioTapeFormat',
    'DigitalDocument',
    'DigitalDocumentPermission',
    'DigitalDocumentPermissionType',
    'DigitalFormat',
    'DigitalPlatformEnumeration',
    'DisabilitySupport',
    'DisagreeAction',
    'Discontinued',
    'DiscoverAction',
    'DiscussionForumPosting',
    'DislikeAction',
    'Distance',
    'DistanceFee',
    'Distillery',
    'DonateAction',
    'DoseSchedule',
    'DoubleBlindedTrial',
    'DownloadAction',
    'Downpayment',
    'DrawAction',
    'Drawing',
    'DrinkAction',
    'DriveWheelConfigurationValue',
    'DrivingSchoolVehicleUsage',
    'Drug',
    'DrugClass',
    'DrugCost',
    'DrugCostCategory',
    'DrugLegalStatus',
    'DrugPregnancyCategory',
    'DrugPrescriptionStatus',
    'DrugStrength',
    'DryCleaningOrLaundry',
    'Duration',
    'EBook',
    'EPRelease',
    'EUEnergyEfficiencyCategoryA',
    'EUEnergyEfficiencyCategoryA1Plus',
    'EUEnergyEfficiencyCategoryA2Plus',
    'EUEnergyEfficiencyCategoryA3Plus',
    'EUEnergyEfficiencyCategoryB',
    'EUEnergyEfficiencyCategoryC',
    'EUEnergyEfficiencyCategoryD',
    'EUEnergyEfficiencyCategoryE',
    'EUEnergyEfficiencyCategoryF',
    'EUEnergyEfficiencyCategoryG',
    'EUEnergyEfficiencyEnumeration',
    'Ear',
    'EatAction',
    'EditedOrCroppedContent',
    'EducationEvent',
    'EducationalAudience',
    'EducationalOccupationalCredential',
    'EducationalOccupationalProgram',
    'EducationalOrganization',
    'EffectivenessHealthAspect',
    'Electrician',
    'ElectronicsStore',
    'ElementarySchool',
    'EmailMessage',
    'Embassy',
    'Emergency',
    'EmergencyService',
    'EmployeeRole',
    'EmployerAggregateRating',
    'EmployerReview',
    'EmploymentAgency',
    'Endocrine',
    'EndorseAction',
    'EndorsementRating',
    'Energy',
    'EnergyConsumptionDetails',
    'EnergyEfficiencyEnumeration',
    'EnergyStarCertified',
    'EnergyStarEnergyEfficiencyEnumeration',
    'EngineSpecification',
    'EnrollingByInvitation',
    'EntertainmentBusiness',
    'EntryPoint',
    'Enumeration',
    'Episode',
    'Event',
    'EventAttendanceModeEnumeration',
    'EventCancelled',
    'EventMovedOnline',
    'EventPostponed',
    'EventRescheduled',
    'EventReservation',
    'EventScheduled',
    'EventSeries',
    'EventStatusType',
    'EventVenue',
    'EvidenceLevelA',
    'EvidenceLevelB',
    'EvidenceLevelC',
    'ExchangeRateSpecification',
    'ExchangeRefund',
    'ExerciseAction',
    'ExerciseGym',
    'ExercisePlan',
    'ExhibitionEvent',
    'Eye',
    'FAQPage',
    'FDAcategoryA',
    'FDAcategoryB',
    'FDAcategoryC',
    'FDAcategoryD',
    'FDAcategoryX',
    'FDAnotEvaluated',
    'FMRadioChannel',
    'FailedActionStatus',
    'False',
    'FastFoodRestaurant',
    'Female',
    'Festival',
    'FilmAction',
    'FinancialProduct',
    'FinancialService',
    'FindAction',
    'FireStation',
    'Flexibility',
    'Flight',
    'FlightReservation',
    'Float',
    'FloorPlan',
    'Florist',
    'FollowAction',
    'FoodEstablishment',
    'FoodEstablishmentReservation',
    'FoodEvent',
    'FoodService',
    'FourWheelDriveConfiguration',
    'FreeReturn',
    'Friday',
    'FrontWheelDriveConfiguration',
    'FullGameAvailability',
    'FullRefund',
    'FundingAgency',
    'FundingScheme',
    'Fungus',
    'FurnitureStore',
    'Game',
    'GameAvailabilityEnumeration',
    'GamePlayMode',
    'GameServer',
    'GameServerStatus',
    'GardenStore',
    'GasStation',
    'Gastroenterologic',
    'GatedResidenceCommunity',
    'GenderType',
    'Gene',
    'GeneralContractor',
    'GenericWebPlatform',
    'Genetic',
    'Genitourinary',
    'GeoCircle',
    'GeoCoordinates',
    'GeoShape',
    'GeospatialGeometry',
    'Geriatric',
    'GettingAccessHealthAspect',
    'GiveAction',
    'GlutenFreeDiet',
    'GolfCourse',
    'GovernmentBenefitsType',
    'GovernmentBuilding',
    'GovernmentOffice',
    'GovernmentOrganization',
    'GovernmentPermit',
    'GovernmentService',
    'Grant',
    'GraphicNovel',
    'GroceryStore',
    'GroupBoardingPolicy',
    'Guide',
    'Gynecologic',
    'HVACBusiness',
    'Hackathon',
    'HairSalon',
    'HalalDiet',
    'Hardcover',
    'HardwareStore',
    'Head',
    'HealthAndBeautyBusiness',
    'HealthAspectEnumeration',
    'HealthCare',
    'HealthClub',
    'HealthInsurancePlan',
    'HealthPlanCostSharingSpecification',
    'HealthPlanFormulary',
    'HealthPlanNetwork',
    'HealthTopicContent',
    'HealthcareConsideration',
    'HearingImpairedSupported',
    'Hematologic',
    'HighSchool',
    'HinduDiet',
    'HinduTemple',
    'HobbyShop',
    'HomeAndConstructionBusiness',
    'HomeGoodsStore',
    'Homeopathic',
    'Hospital',
    'Hostel',
    'Hotel',
    'HotelRoom',
    'House',
    'HousePainter',
    'HowItWorksHealthAspect',
    'HowOrWhereHealthAspect',
    'HowTo',
    'HowToDirection',
    'HowToItem',
    'HowToSection',
    'HowToStep',
    'HowToSupply',
    'HowToTip',
    'HowToTool',
    'HyperToc',
    'HyperTocEntry',
    'IOSPlatform',
    'IceCreamShop',
    'IgnoreAction',
    'ImageGallery',
    'ImageObject',
    'ImageObjectSnapshot',
    'ImagingTest',
    'InForce',
    'InStock',
    'InStoreOnly',
    'IndividualProduct',
    'Infectious',
    'InfectiousAgentClass',
    'InfectiousDisease',
    'InformAction',
    'IngredientsHealthAspect',
    'InsertAction',
    'InstallAction',
    'Installment',
    'InsuranceAgency',
    'Intangible',
    'Integer',
    'InteractAction',
    'InteractionCounter',
    'InternationalTrial',
    'InternetCafe',
    'InvestmentFund',
    'InvestmentOrDeposit',
    'InviteAction',
    'Invoice',
    'InvoicePrice',
    'ItemAvailability',
    'ItemList',
    'ItemListOrderAscending',
    'ItemListOrderDescending',
    'ItemListOrderType',
    'ItemListUnordered',
    'ItemPage',
    'JewelryStore',
    'JobPosting',
    'JoinAction',
    'Joint',
    'KosherDiet',
    'LaboratoryScience',
    'LakeBodyOfWater',
    'Landform',
    'LandmarksOrHistoricalBuildings',
    'Language',
    'LaserDiscFormat',
    'LearningResource',
    'LeaveAction',
    'LeftHandDriving',
    'LegalForceStatus',
    'LegalService',
    'LegalValueLevel',
    'Legislation',
    'LegislationObject',
    'LegislativeBuilding',
    'LeisureTimeActivity',
    'LendAction',
    'Library',
    'LibrarySystem',
    'LifestyleModification',
    'Ligament',
    'LikeAction',
    'LimitedAvailability',
    'LimitedByGuaranteeCharity',
    'LinkRole',
    'LiquorStore',
    'ListItem',
    'ListPrice',
    'ListenAction',
    'LiteraryEvent',
    'LiveAlbum',
    'LiveBlogPosting',
    'LivingWithHealthAspect',
    'LoanOrCredit',
    'LocalBusiness',
    'LocationFeatureSpecification',
    'LockerDelivery',
    'Locksmith',
    'LodgingBusiness',
    'LodgingReservation',
    'Longitudinal',
    'LoseAction',
    'LowCalorieDiet',
    'LowFatDiet',
    'LowLactoseDiet',
    'LowSaltDiet',
    'Lung',
    'LymphaticVessel',
    'MRI',
    'MSRP',
    'Male',
    'Manuscript',
    'Map',
    'MapCategoryType',
    'MarryAction',
    'Mass',
    'MathSolver',
    'MaximumDoseSchedule',
    'MayTreatHealthAspect',
    'MeasurementTypeEnumeration',
    'MediaGallery',
    'MediaManipulationRatingEnumeration',
    'MediaObject',
    'MediaReview',
    'MediaReviewItem',
    'MediaSubscription',
    'MedicalAudience',
    'MedicalAudienceType',
    'MedicalBusiness',
    'MedicalCause',
    'MedicalClinic',
    'MedicalCode',
    'MedicalCondition',
    'MedicalConditionStage',
    'MedicalContraindication',
    'MedicalDevice',
    'MedicalDevicePurpose',
    'MedicalEntity',
    'MedicalEnumeration',
    'MedicalEvidenceLevel',
    'MedicalGuideline',
    'MedicalGuidelineContraindication',
    'MedicalGuidelineRecommendation',
    'MedicalImagingTechnique',
    'MedicalIndication',
    'MedicalIntangible',
    'MedicalObservationalStudy',
    'MedicalObservationalStudyDesign',
    'MedicalOrganization',
    'MedicalProcedure',
    'MedicalProcedureType',
    'MedicalResearcher',
    'MedicalRiskCalculator',
    'MedicalRiskEstimator',
    'MedicalRiskFactor',
    'MedicalRiskScore',
    'MedicalScholarlyArticle',
    'MedicalSign',
    'MedicalSignOrSymptom',
    'MedicalSpecialty',
    'MedicalStudy',
    'MedicalStudyStatus',
    'MedicalSymptom',
    'MedicalTest',
    'MedicalTestPanel',
    'MedicalTherapy',
    'MedicalTrial',
    'MedicalTrialDesign',
    'MedicalWebPage',
    'MedicineSystem',
    'MeetingRoom',
    'MensClothingStore',
    'Menu',
    'MenuItem',
    'MenuSection',
    'MerchantReturnEnumeration',
    'MerchantReturnFiniteReturnWindow',
    'MerchantReturnNotPermitted',
    'MerchantReturnPolicy',
    'MerchantReturnPolicySeasonalOverride',
    'MerchantReturnUnlimitedWindow',
    'MerchantReturnUnspecified',
    'Message',
    'MiddleSchool',
    'Midwifery',
    'MinimumAdvertisedPrice',
    'MisconceptionsHealthAspect',
    'MixedEventAttendanceMode',
    'MixtapeAlbum',
    'MobileApplication',
    'MobilePhoneStore',
    'MobileWebPlatform',
    'MolecularEntity',
    'Monday',
    'MonetaryAmount',
    'MonetaryAmountDistribution',
    'MonetaryGrant',
    'MoneyTransfer',
    'MortgageLoan',
    'Mosque',
    'Motel',
    'Motorcycle',
    'MotorcycleDealer',
    'MotorcycleRepair',
    'MotorizedBicycle',
    'Mountain',
    'MoveAction',
    'Movie',
    'MovieClip',
    'MovieRentalStore',
    'MovieSeries',
    'MovieTheater',
    'MovingCompany',
    'MultiCenterTrial',
    'MultiPlayer',
    'MulticellularParasite',
    'Muscle',
    'Musculoskeletal',
    'MusculoskeletalExam',
    'Museum',
    'MusicAlbum',
    'MusicAlbumProductionType',
    'MusicAlbumReleaseType',
    'MusicComposition',
    'MusicEvent',
    'MusicGroup',
    'MusicPlaylist',
    'MusicRecording',
    'MusicRelease',
    'MusicReleaseFormatType',
    'MusicStore',
    'MusicVenue',
    'MusicVideoObject',
    'NGO',
    'NLNonprofitType',
    'NailSalon',
    'NarcoticConsideration',
    'Neck',
    'Nerve',
    'Neuro',
    'Neurologic',
    'NewCondition',
    'NewsArticle',
    'NewsMediaOrganization',
    'Newspaper',
    'NightClub',
    'NoninvasiveProcedure',
    'Nonprofit501a',
    'Nonprofit501c1',
    'Nonprofit501c10',
    'Nonprofit501c11',
    'Nonprofit501c12',
    'Nonprofit501c13',
    'Nonprofit501c14',
    'Nonprofit501c15',
    'Nonprofit501c16',
    'Nonprofit501c17',
    'Nonprofit501c18',
    'Nonprofit501c19',
    'Nonprofit501c2',
    'Nonprofit501c20',
    'Nonprofit501c21',
    'Nonprofit501c22',
    'Nonprofit501c23',
    'Nonprofit501c24',
    'Nonprofit501c25',
    'Nonprofit501c26',
    'Nonprofit501c27',
    'Nonprofit501c28',
    'Nonprofit501c3',
    'Nonprofit501c4',
    'Nonprofit501c5',
    'Nonprofit501c6',
    'Nonprofit501c7',
    'Nonprofit501c8',
    'Nonprofit501c9',
    'Nonprofit501d',
    'Nonprofit501e',
    'Nonprofit501f',
    'Nonprofit501k',
    'Nonprofit501n',
    'Nonprofit501q',
    'Nonprofit527',
    'NonprofitANBI',
    'NonprofitSBBI',
    'NonprofitType',
    'Nose',
    'NotInForce',
    'NotYetRecruiting',
    'Notary',
    'NoteDigitalDocument',
    'Number',
    'Nursing',
    'NutritionInformation',
    'OTC',
    'Observation',
    'Observational',
    'Obstetric',
    'Occupation',
    'OccupationalActivity',
    'OccupationalExperienceRequirements',
    'OccupationalTherapy',
    'OceanBodyOfWater',
    'Offer',
    'OfferCatalog',
    'OfferForLease',
    'OfferForPurchase',
    'OfferItemCondition',
    'OfferShippingDetails',
    'OfficeEquipmentStore',
    'OfficialLegalValue',
    'OfflineEventAttendanceMode',
    'OfflinePermanently',
    'OfflineTemporarily',
    'OnDemandEvent',
    'OnSitePickup',
    'Oncologic',
    'OneTimePayments',
    'Online',
    'OnlineBusiness',
    'OnlineEventAttendanceMode',
    'OnlineFull',
    'OnlineOnly',
    'OnlineStore',
    'OpenTrial',
    'OpeningHoursSpecification',
    'OpinionNewsArticle',
    'Optician',
    'Optometric',
    'Order',
    'OrderAction',
    'OrderCancelled',
    'OrderDelivered',
    'OrderInTransit',
    'OrderItem',
    'OrderPaymentDue',
    'OrderPickupAvailable',
    'OrderProblem',
    'OrderProcessing',
    'OrderReturned',
    'OrderStatus',
    'Organization',
    'OrganizationRole',
    'OrganizeAction',
    'OriginalMediaContent',
    'OriginalShippingFees',
    'Osteopathic',
    'Otolaryngologic',
    'OutOfStock',
    'OutletStore',
    'OverviewHealthAspect',
    'OwnershipInfo',
    'PET',
    'PaidLeave',
    'PaintAction',
    'Painting',
    'PalliativeProcedure',
    'Paperback',
    'ParcelDelivery',
    'ParcelService',
    'ParentAudience',
    'ParentalSupport',
    'Park',
    'ParkingFacility',
    'ParkingMap',
    'PartiallyInForce',
    'Pathology',
    'PathologyTest',
    'Patient',
    'PatientExperienceHealthAspect',
    'PawnShop',
    'PayAction',
    'PaymentAutomaticallyApplied',
    'PaymentCard',
    'PaymentChargeSpecification',
    'PaymentComplete',
    'PaymentDeclined',
    'PaymentDue',
    'PaymentMethod',
    'PaymentPastDue',
    'PaymentService',
    'PaymentStatusType',
    'Pediatric',
    'PeopleAudience',
    'PercutaneousProcedure',
    'PerformAction',
    'PerformanceRole',
    'PerformingArtsTheater',
    'PerformingGroup',
    'Periodical',
    'Permit',
    'Person',
    'PetStore',
    'Pharmacy',
    'PharmacySpecialty',
    'Photograph',
    'PhotographAction',
    'PhysicalActivity',
    'PhysicalActivityCategory',
    'PhysicalExam',
    'PhysicalTherapy',
    'Physician',
    'Physiotherapy',
    'Place',
    'PlaceOfWorship',
    'PlaceboControlledTrial',
    'PlanAction',
    'PlasticSurgery',
    'Play',
    'PlayAction',
    'PlayGameAction',
    'Playground',
    'Plumber',
    'PodcastEpisode',
    'PodcastSeason',
    'PodcastSeries',
    'Podiatric',
    'PoliceStation',
    'Pond',
    'PostOffice',
    'PostalAddress',
    'PostalCodeRangeSpecification',
    'Poster',
    'PotentialActionStatus',
    'PreOrder',
    'PreOrderAction',
    'PreSale',
    'PregnancyHealthAspect',
    'PrependAction',
    'Preschool',
    'PrescriptionOnly',
    'PresentationDigitalDocument',
    'PreventionHealthAspect',
    'PreventionIndication',
    'PriceComponentTypeEnumeration',
    'PriceSpecification',
    'PriceTypeEnumeration',
    'PrimaryCare',
    'Prion',
    'Product',
    'ProductCollection',
    'ProductGroup',
    'ProductModel',
    'ProductReturnEnumeration',
    'ProductReturnFiniteReturnWindow',
    'ProductReturnNotPermitted',
    'ProductReturnPolicy',
    'ProductReturnUnlimitedWindow',
    'ProductReturnUnspecified',
    'ProfessionalService',
    'ProfilePage',
    'PrognosisHealthAspect',
    'ProgramMembership',
    'Project',
    'PronounceableText',
    'Property',
    'PropertyValue',
    'PropertyValueSpecification',
    'Protein',
    'Protozoa',
    'Psychiatric',
    'PsychologicalTreatment',
    'PublicHealth',
    'PublicHolidays',
    'PublicSwimmingPool',
    'PublicToilet',
    'PublicationEvent',
    'PublicationIssue',
    'PublicationVolume',
    'Pulmonary',
    'QAPage',
    'QualitativeValue',
    'QuantitativeValue',
    'QuantitativeValueDistribution',
    'Quantity',
    'Question',
    'Quiz',
    'Quotation',
    'QuoteAction',
    'RVPark',
    'RadiationTherapy',
    'RadioBroadcastService',
    'RadioChannel',
    'RadioClip',
    'RadioEpisode',
    'RadioSeason',
    'RadioSeries',
    'RadioStation',
    'Radiography',
    'RandomizedTrial',
    'Rating',
    'ReactAction',
    'ReadAction',
    'ReadPermission',
    'RealEstateAgent',
    'RealEstateListing',
    'RearWheelDriveConfiguration',
    'ReceiveAction',
    'Recipe',
    'Recommendation',
    'RecommendedDoseSchedule',
    'Recruiting',
    'RecyclingCenter',
    'ReducedRelevanceForChildrenConsideration',
    'RefundTypeEnumeration',
    'RefurbishedCondition',
    'RegisterAction',
    'Registry',
    'ReimbursementCap',
    'RejectAction',
    'RelatedTopicsHealthAspect',
    'RemixAlbum',
    'Renal',
    'RentAction',
    'RentalCarReservation',
    'RentalVehicleUsage',
    'RepaymentSpecification',
    'ReplaceAction',
    'ReplyAction',
    'Report',
    'ReportageNewsArticle',
    'ReportedDoseSchedule',
    'ResearchOrganization',
    'ResearchProject',
    'Researcher',
    'Reservation',
    'ReservationCancelled',
    'ReservationConfirmed',
    'ReservationHold',
    'ReservationPackage',
    'ReservationPending',
    'ReservationStatusType',
    'ReserveAction',
    'Reservoir',
    'Residence',
    'Resort',
    'RespiratoryTherapy',
    'Restaurant',
    'RestockingFees',
    'RestrictedDiet',
    'ResultsAvailable',
    'ResultsNotAvailable',
    'ResumeAction',
    'Retail',
    'ReturnAction',
    'ReturnAtKiosk',
    'ReturnByMail',
    'ReturnFeesCustomerResponsibility',
    'ReturnFeesEnumeration',
    'ReturnInStore',
    'ReturnLabelCustomerResponsibility',
    'ReturnLabelDownloadAndPrint',
    'ReturnLabelInBox',
    'ReturnLabelSourceEnumeration',
    'ReturnMethodEnumeration',
    'ReturnShippingFees',
    'Review',
    'ReviewAction',
    'ReviewNewsArticle',
    'Rheumatologic',
    'RightHandDriving',
    'RisksOrComplicationsHealthAspect',
    'RiverBodyOfWater',
    'Role',
    'RoofingContractor',
    'Room',
    'RsvpAction',
    'RsvpResponseMaybe',
    'RsvpResponseNo',
    'RsvpResponseType',
    'RsvpResponseYes',
    'SRP',
    'SafetyHealthAspect',
    'SaleEvent',
    'SalePrice',
    'SatireOrParodyContent',
    'SatiricalArticle',
    'Saturday',
    'Schedule',
    'ScheduleAction',
    'ScholarlyArticle',
    'School',
    'SchoolDistrict',
    'ScreeningEvent',
    'ScreeningHealthAspect',
    'Sculpture',
    'SeaBodyOfWater',
    'SearchAction',
    'SearchRescueOrganization',
    'SearchResultsPage',
    'Season',
    'Seat',
    'SeatingMap',
    'SeeDoctorHealthAspect',
    'SeekToAction',
    'SelfCareHealthAspect',
    'SelfStorage',
    'SellAction',
    'SendAction',
    'Series',
    'Service',
    'ServiceChannel',
    'SexualContentConsideration',
    'ShareAction',
    'SheetMusic',
    'ShippingDeliveryTime',
    'ShippingRateSettings',
    'ShoeStore',
    'ShoppingCenter',
    'ShortStory',
    'SideEffectsHealthAspect',
    'SingleBlindedTrial',
    'SingleCenterTrial',
    'SingleFamilyResidence',
    'SinglePlayer',
    'SingleRelease',
    'SiteNavigationElement',
    'SizeGroupEnumeration',
    'SizeSpecification',
    'SizeSystemEnumeration',
    'SizeSystemImperial',
    'SizeSystemMetric',
    'SkiResort',
    'Skin',
    'SocialEvent',
    'SocialMediaPosting',
    'SoftwareApplication',
    'SoftwareSourceCode',
    'SoldOut',
    'SolveMathAction',
    'SomeProducts',
    'SoundtrackAlbum',
    'SpeakableSpecification',
    'SpecialAnnouncement',
    'Specialty',
    'SpeechPathology',
    'SpokenWordAlbum',
    'SportingGoodsStore',
    'SportsActivityLocation',
    'SportsClub',
    'SportsEvent',
    'SportsOrganization',
    'SportsTeam',
    'SpreadsheetDigitalDocument',
    'StadiumOrArena',
    'StagedContent',
    'StagesHealthAspect',
    'State',
    'Statement',
    'StatisticalPopulation',
    'StatusEnumeration',
    'SteeringPositionValue',
    'Store',
    'StoreCreditRefund',
    'StrengthTraining',
    'StructuredValue',
    'StudioAlbum',
    'StupidType',
    'SubscribeAction',
    'Subscription',
    'Substance',
    'SubwayStation',
    'Suite',
    'Sunday',
    'SuperficialAnatomy',
    'Surgical',
    'SurgicalProcedure',
    'SuspendAction',
    'Suspended',
    'SymptomsHealthAspect',
    'Synagogue',
    'TVClip',
    'TVEpisode',
    'TVSeason',
    'TVSeries',
    'Table',
    'TakeAction',
    'TattooParlor',
    'Taxi',
    'TaxiReservation',
    'TaxiService',
    'TaxiStand',
    'TaxiVehicleUsage',
    'Taxon',
    'TechArticle',
    'TelevisionChannel',
    'TelevisionStation',
    'TennisComplex',
    'Terminated',
    'Text',
    'TextDigitalDocument',
    'TheaterEvent',
    'TheaterGroup',
    'Therapeutic',
    'TherapeuticProcedure',
    'Thesis',
    'Throat',
    'Thursday',
    'Ticket',
    'TieAction',
    'Time',
    'TipAction',
    'TireShop',
    'TobaccoNicotineConsideration',
    'TollFree',
    'TouristAttraction',
    'TouristDestination',
    'TouristInformationCenter',
    'TouristTrip',
    'Toxicologic',
    'ToyStore',
    'TrackAction',
    'TradeAction',
    'TraditionalChinese',
    'TrainReservation',
    'TrainStation',
    'TrainTrip',
    'TransferAction',
    'TransformedContent',
    'TransitMap',
    'TravelAction',
    'TravelAgency',
    'TreatmentIndication',
    'TreatmentsHealthAspect',
    'Trip',
    'TripleBlindedTrial',
    'True',
    'Tuesday',
    'TypeAndQuantityNode',
    'TypesHealthAspect',
    'UKNonprofitType',
    'UKTrust',
    'URL',
    'USNonprofitType',
    'Ultrasound',
    'UnRegisterAction',
    'UnclassifiedAdultConsideration',
    'UnemploymentSupport',
    'UnincorporatedAssociationCharity',
    'UnitPriceSpecification',
    'UnofficialLegalValue',
    'UpdateAction',
    'Urologic',
    'UsageOrScheduleHealthAspect',
    'UseAction',
    'UsedCondition',
    'UserBlocks',
    'UserCheckins',
    'UserComments',
    'UserDownloads',
    'UserInteraction',
    'UserLikes',
    'UserPageVisits',
    'UserPlays',
    'UserPlusOnes',
    'UserReview',
    'UserTweets',
    'VeganDiet',
    'VegetarianDiet',
    'Vehicle',
    'Vein',
    'VenueMap',
    'Vessel',
    'VeterinaryCare',
    'VideoGallery',
    'VideoGame',
    'VideoGameClip',
    'VideoGameSeries',
    'VideoObject',
    'VideoObjectSnapshot',
    'ViewAction',
    'VinylFormat',
    'ViolenceConsideration',
    'VirtualLocation',
    'Virus',
    'VisualArtsEvent',
    'VisualArtwork',
    'VitalSign',
    'Volcano',
    'VoteAction',
    'WPAdBlock',
    'WPFooter',
    'WPHeader',
    'WPSideBar',
    'WantAction',
    'WarrantyPromise',
    'WarrantyScope',
    'WatchAction',
    'Waterfall',
    'WeaponConsideration',
    'WearAction',
    'WearableMeasurementBack',
    'WearableMeasurementChestOrBust',
    'WearableMeasurementCollar',
    'WearableMeasurementCup',
    'WearableMeasurementHeight',
    'WearableMeasurementHips',
    'WearableMeasurementInseam',
    'WearableMeasurementLength',
    'WearableMeasurementOutsideLeg',
    'WearableMeasurementSleeve',
    'WearableMeasurementTypeEnumeration',
    'WearableMeasurementWaist',
    'WearableMeasurementWidth',
    'WearableSizeGroupBig',
    'WearableSizeGroupBoys',
    'WearableSizeGroupEnumeration',
    'WearableSizeGroupExtraShort',
    'WearableSizeGroupExtraTall',
    'WearableSizeGroupGirls',
    'WearableSizeGroupHusky',
    'WearableSizeGroupInfants',
    'WearableSizeGroupJuniors',
    'WearableSizeGroupMaternity',
    'WearableSizeGroupMens',
    'WearableSizeGroupMisses',
    'WearableSizeGroupPetite',
    'WearableSizeGroupPlus',
    'WearableSizeGroupRegular',
    'WearableSizeGroupShort',
    'WearableSizeGroupTall',
    'WearableSizeGroupWomens',
    'WearableSizeSystemAU',
    'WearableSizeSystemBR',
    'WearableSizeSystemCN',
    'WearableSizeSystemContinental',
    'WearableSizeSystemDE',
    'WearableSizeSystemEN13402',
    'WearableSizeSystemEnumeration',
    'WearableSizeSystemEurope',
    'WearableSizeSystemFR',
    'WearableSizeSystemGS1',
    'WearableSizeSystemIT',
    'WearableSizeSystemJP',
    'WearableSizeSystemMX',
    'WearableSizeSystemUK',
    'WearableSizeSystemUS',
    'WebAPI',
    'WebApplication',
    'WebContent',
    'WebPage',
    'WebPageElement',
    'WebSite',
    'Wednesday',
    'WesternConventional',
    'Wholesale',
    'WholesaleStore',
    'WinAction',
    'Winery',
    'Withdrawn',
    'WorkBasedProgram',
    'WorkersUnion',
    'WriteAction',
    'WritePermission',
    'XPathType',
    'XRay',
    'ZoneBoardingPolicy',
    'Zoo'
  ]) {
    API.plugin(require(`./${modelName}.js`))
  }
}