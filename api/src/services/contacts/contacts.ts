import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = ({
  input,
}) => {
  return db.contact.create({
    data: input,
  })
}

/*
Should make PR about these types for the tutorial documentation
- this is not how it is shown, uses custom interfaces in tutorial, like:

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }: Prisma.ContactWhereUniqueInput) => {
  return db.contact.findUnique({
    where: { id },
  })
}

interface CreateContactArgs {
  input: Prisma.ContactCreateInput
}

export const createContact = ({ input }: CreateContactArgs) => {
  return db.contact.create({
    data: input,
  })
}
*/
