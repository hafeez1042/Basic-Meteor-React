Schema = {};

Schema.DonationHistory = new SimpleSchema({
  lastDonatedOn: {
    type: Date,
    optional: true
  },
  history: {
    type: Array,
    optional: true
  },
  'history.$': {
    type: Object,
  },
  'history.$.recieverId': {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  'history.$.date': {
    type: Date,
  }
});

Schema.UserProfile = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  dateOfBirth: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true
  },
  bloodGroupId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  contactNo: {
    type: String,
    min: 8,
    max: 16,
    optional: true
  },
  anyTimeReady: {
    type: Boolean,
    defaultValue: true
  },
  location: {
    type: Object,
    optional: true
  },
  'location.geo': {
    type: Object,
    optional: true
  },
  'location.geo.lat': {
    type: String,
  },
  'location.geo.lng': {
    type: String,
  },
  'location.address': {
    type: Object,
    optional: true
  },
  'location.address.locality': {
    type: String,
    optional: true
  },
  'location.address.city': {
    type: String,
    optional: true
  },
  'location.address.district': {
    type: String,
    optional: true
  },
  'location.address.state': {
    type: String,
    optional: true
  },
  'location.address.country': {
    type: String,
    optional: true
  },
  'location.address.pincode': {
    type: String,
    optional: true
  }

});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },

  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },

  history: {
    type: Schema.DonationHistory,
    optional: true
  },

  registrationCompleted: {
    type: Boolean,
    defaultValue: false
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true
  },

  roles: {
    type: [String],
    optional: true,
  }
});

Meteor.users.attachSchema(Schema.User);
