import { pgTable, serial, text, varchar, integer, timestamp} from "drizzle-orm/pg-core";



/*Scripts 
    "db:push": "npm run db:push",
    "db:studio": "npm run db:studio"
*/
export const MockInterview =pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull(),
})

export const UserAnswer =pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('answer'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'), 
    createdAt:varchar('createdAt'),
})

export const UserSubscription =pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    userEmail:varchar('userEmail').notNull(),
    stripeCustomerId:varchar('stripeCustomerId').notNull(),
    stripeSubscriptionId:varchar('subscriptionId').notNull(),
    stripePirceId:varchar('stripePirceId').notNull(),
    StripeCurrentPeriodEnd:varchar('StripeCurrentPeriodEnd').notNull(),
})

export const payments = pgTable('payments', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull(),
    amount: integer('amount').notNull(),
    status: varchar('status', { length: 50 }).notNull(),
    paymentIntentId: varchar('paymentIntentId', { length: 255 }).notNull().unique(),
    paymentDate: timestamp('paymentDate').defaultNow().notNull(),
});