import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. Kenapa harus menggunakan resume builder? Kenapa resume builder lebih baik dibanding resume manual/doc?",
    answer: (
      <>
        <p>
          Ada dua cara untuk membuat resume saat ini. 
          Salah satunya adalah menggunakan template resume, seperti dokumen di word ataupun Google Docs, 
          dan menyesuaikannya sesuai kebutuhan Anda. <br />
          Pilihan lainnya adalah menggunakan pembuat resume, 
          sebuah tools online yang memungkinkan kamu memasukkan informasi secara 
          otomatis tanpa memungsingkan tampilan dan format tulisan.
        </p>
        <p>
          Menggunakan template resume memerlukan pekerjaan pengaturan manual, 
          seperti menyalin dan menempel bagian teks serta mengatur jarak dan ukuran font, yang pasti 
          memakan waktu dan tentunya rentan terhadap kesalahan. 
         <br /> 
         Di sisi lain, aplikasi online seperti 
         {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>ResumeHQ</span> {''}
          bisa menghemat waktumu dan pastinya mencegah kesalahan format secara otomatis.
          <br /> Aplikasi ini juga menawarkan kemudahan untuk mengubah jenis ataupun ukuran font 
          cukup dengan sekali klik.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. Apa yang membuat ResumeHQ lebih Unique dibanding tools lainnya?",
    answer: (
      <>
        <p>
        Selain
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>ResumeHQ</span>, {''}
        ada beberapa pembuat resume GRATIS yang bagus di luar sana. 
        <br />Namun, 
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-600'>ResumeHQ</span> {''}
         unggul dengan 2 fitur khas:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-600'>ResumeHQ</span>{' '}
            dirancang khusus untuk pasar kerja baik itu di kancah lokal maupun Internasional seperti halnya Amerika dan Eropa.
          </span>
          <br />
          Berbeda dengan pembuat resume lain yang menargetkan audiens global dan menawarkan banyak opsi yang terkadang membuat kandiat kebingungan, 
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-600'>ResumeHQ</span>{' '}
           sengaja hanya menyediakan opsi STANDARD yang sesuai dengan praktik terbaik di kancah Internasional. <br />
           Misalnya, 
           {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-600'>ResumeHQ</span> {''}
            tidak menyertakan opsi untuk menambahkan foto profil guna menghindari bias dan diskriminasi <i>(setidaknya hingga saat ini)</i>. <br /> 
           Kami hanya menawarkan bagian inti, seperti profil, pengalaman kerja, 
           pendidikan, dan keterampilan, sambil menghilangkan bagian-bagian yang tidak perlu, 
           seperti referensi. <br />
           Selain itu, {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-600'>ResumeHQ</span> {''}
            hanya menawarkan desain resume kolom tunggal dari atas ke bawah, tidak seperti desain dua kolom, karena desain kolom tunggal lebih cocok untuk sistem ATS (Application Tracking System). 
          <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-green-300'>ResumeHQ</span> {''}
             sangat berfokus pada privasi.
          </span>{" "}
          <br />
          Sementara pembuat resume lain mungkin memerlukan pendaftaran melalui 
          email dan menyimpan data pengguna di database mereka, {' '} <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500'>ResumeHQ</span> {' '} 
          percaya bahwa data resume harus tetap bersifat pribadi dan hanya dapat diakses 
          oleh pengguna di perangkat lokal mereka. <br /> Oleh karena itu, 
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>ResumeHQ</span> {''}
          tidak memerlukan pendaftaran untuk menggunakan aplikasi, 
          dan semua data yang dimasukkan disimpan di peramban pengguna yang hanya 
          bisa diakses oleh pengguna itu sendiri.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Siapa dibalik ResumeHQ?",
    answer: (
      <p>
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-600'>ResumeHQ</span> {''}
         dikembangkan oleh {" "}
         <Link href="https://www.lokerhq.com">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600'>Loker Headquarters</span>, {''}
          </Link>{" "}
        sebagai sarana yang diharapkan dapat membantu para pencari kerja membuat resume yang lebih profesional. 
        Kami memerlukan waktu lama untuk belajar beberapa praktik terbaik. <br />
        Ketika menjadi mentor bagi mahasiswa generasi pertama dan meninjau resume mereka, 
        kami menyadari bahwa para mahasiswa membuat kesalahan yang sama seperti yang kami lakukan sebelumnya. <br />
      </p>
    ),
  },
  {
    question: "Q4. Bagaimana cara mensupport kami?",
    answer: (
      <>
        <p>
        Cara terbaik untuk mendukung 
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-600'>ResumeHQ</span> {''}
         adalah dengan berbagi pemikiran 
        dan masukan Anda untuk membantu kami meningkatkannya lebih lanjut. 
        Baik Anda menyukainya atau tidak, kami senang mendengar dari Anda.
        {" "}
          <Link href="mailto:team@lokerhq.com">team@lokerhq.com</Link>{" "}
          atau follow sosial media kami di: 
          {" "}
          <Link href="https://linkedin.com/company/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-600'>LinkedIn</span>, {''}
          </Link>{" "}
          <Link href="https://twitter.com/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600'>Twitter</span>, {''}
          </Link>{" "}
          <Link href="https://facebook.com/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600'>Facebook</span>, {''}
          </Link>{" "}
          atau{" "}
          <Link href="https://instagram.com/lokerhq">
          {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>Instagram</span>. {''}
          </Link>
        </p>
        <p>
        Cara lain yang luar biasa untuk mendukung 
        {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600'>ResumeHQ</span> {''}
         adalah dengan membagikannya kepada orang terdekat kamu. 
        Seperit teman, sosmed, ataupun kampus. 
        <br />Tujuan kami adalah menjangkau lebih 
        banyak orang yang dan membantu mereka yang mengalami kesulitan dalam membuat resume, 
        dan dukungan dari mulut ke mulut akan sangat membantu kami untuk terus mengembangkan platform ini. 
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Tentang ResumeHQ</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
