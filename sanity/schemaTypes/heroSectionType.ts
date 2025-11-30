import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "tagLine",
      title: "Tag Line",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "heroImageLarge",
      title: "Large Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "heroImageSmall",
      title: "Small Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "buttonText1",
      title: "First Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonText2",
      title: "Second Button Text",
      type: "string",
    }),

  ],
});
