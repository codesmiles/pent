# PENT

## ISSUES

- Formal tenants of a house gives reviews about a houses and areas they've previously lived in
- Visitors can view reviews and also check if the info is helpful

## SOLUTION

- Created endpoint for authorizing users to make review postings
- Making the post open for any visitors to see 
- Storing both user and posts data to the database

## ENVIRONMENT VARIABLE

- JWTKEY
- JWT_SECRET

## Pre-Merge Checklist

- run $npm install - to install added packages
- run $npm start - to start up project

## API

- /api/user/sign-up
- /api/user/sign-in
- /api/user/post-review
- /api/visitor/get-all-reviews
- /api/visitor/review-feedback
- /api/visitor/get-single-review
