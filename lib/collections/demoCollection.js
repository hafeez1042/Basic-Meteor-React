Schema = {};
BloodGroups = new Mongo.Collection("bloodGroups");

Schema.BloodGroups = new SimpleSchema({
  title: {
    type: String,
    min: 1,
    max: 10,
    label: 'Blood Group'
  },
  description: {
    type: String,
    optional: true
  },
  link: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

BloodGroups.attachSchema(Schema.BloodGroups);
