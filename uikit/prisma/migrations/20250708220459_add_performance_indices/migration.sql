-- CreateIndex
CREATE INDEX "analytics_createdAt_idx" ON "analytics"("createdAt");

-- CreateIndex
CREATE INDEX "analytics_views_idx" ON "analytics"("views");

-- CreateIndex
CREATE INDEX "contacts_email_idx" ON "contacts"("email");

-- CreateIndex
CREATE INDEX "contacts_isRead_idx" ON "contacts"("isRead");

-- CreateIndex
CREATE INDEX "contacts_createdAt_idx" ON "contacts"("createdAt");

-- CreateIndex
CREATE INDEX "contacts_isRead_createdAt_idx" ON "contacts"("isRead", "createdAt");

-- CreateIndex
CREATE INDEX "posts_authorId_idx" ON "posts"("authorId");

-- CreateIndex
CREATE INDEX "posts_published_idx" ON "posts"("published");

-- CreateIndex
CREATE INDEX "posts_createdAt_idx" ON "posts"("createdAt");

-- CreateIndex
CREATE INDEX "posts_authorId_published_idx" ON "posts"("authorId", "published");

-- CreateIndex
CREATE INDEX "subscriptions_userId_idx" ON "subscriptions"("userId");

-- CreateIndex
CREATE INDEX "subscriptions_createdAt_idx" ON "subscriptions"("createdAt");

-- CreateIndex
CREATE INDEX "subscriptions_isActive_idx" ON "subscriptions"("isActive");

-- CreateIndex
CREATE INDEX "subscriptions_source_idx" ON "subscriptions"("source");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");
