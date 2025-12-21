-- Indexing is like the contents section of a book
-- Indexing is used mostly for huge tables with many rows (eg > 100,000)

EXPLAIN ANALYZE
select * from students where email = 'jessicataylor8@example.com';

-- creating an index - explicit indexing
create index idx_students_email
on students(email);

-- So when for a large data, when we query sth, normally there is a sequential scan to find the data/row i.e. row by row, each data is searched.
-- However, when there is indexing, eg. for the email column, a contents lookup is created which is searched and the data is found significantly fast.
-- For indexing, usually those columns used for conditions such as WHERE, JOIN, ORDER BY, GROUP BY, etc. may be indexed for us to be benefited.

-- !!!BUT, for small data this is inefficient and may take up more space and even more time than usually required!!!
-- Indexing also has some more price: for eg during data INSERT, UPDATE, etc. the new data will also be indexed for that column, so it will make it a little slower. Hence, indexing is only beneficial for huge data.
