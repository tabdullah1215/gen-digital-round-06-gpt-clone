# CAT-407: Let shoppers ask about a product

**Type:** Story · **Priority:** High · **Reporter:** Morgan Lee, Customer Experience

## Context

Shoppers often have a question about dimensions, materials, or care before
ordering. Customer Care wants those questions to begin from the product page
without sending shoppers to a separate contact flow.

## User story

As a shopper, I want to ask a question about a product,
so I can get help without losing the product I am considering.

## Acceptance criteria

1. Each product page exposes an accessible question form with an email field, a
   question field, and a submit action. The existing product details, product
   link, and room-list action remain available.
2. Submitting an invalid form shows clear inline errors and does not call the
   support-request helper. Email must have a valid shape and the question must
   contain non-whitespace text.
3. A valid submission shows a pending state, calls the provided support-request
   helper once with the product slug and trimmed values, and then shows a
   success state with the returned reference. If the helper fails, show an
   actionable error while preserving the shopper's entered values for retry.
4. **Stretch:** Let the shopper choose a question topic—Product details,
   Delivery, or Care. Include the selected topic in the request and mention it
   in the success state. Existing submissions should default to Product details.

## Out of scope

Backend persistence, email delivery, authentication, URL query state, cart or
checkout changes, client-side catalogue fetching, and visual redesign.

Existing tests must keep passing; add tests for new behaviour.
