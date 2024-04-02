import ProductPage from '@/components/ui/ProjectPage/ProductPage';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/signin');
  }

  return (
    <div>
      <ProductPage />
    </div>
  );
}
