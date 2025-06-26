<?php
namespace App\Filament\Reports;

use App\Models\Subscription;
use EightyNine\Reports\Components\Body;
use EightyNine\Reports\Components\Footer;
use EightyNine\Reports\Components\Header;
use EightyNine\Reports\Components\Image;
use EightyNine\Reports\Components\Text;
use EightyNine\Reports\Components\VerticalSpace;
use EightyNine\Reports\Report;
use Filament\Forms\Form;
use Illuminate\Support\Collection;

class SubscriptionsReport extends Report
{
    public ?string $heading = "Report";

    public function registrationSummary(?array $filters): Collection
    {
        return Subscription::selectRaw('DATE(created_at) as Date, COUNT(*) as Registered')
            ->groupBy('Date')
            ->orderBy('Date')
            ->get(); // ✅ Already a Collection
    }

    public function verificationSummary(?array $filters): Collection
    {
        return collect([
            ['Date' => '2025-06-01', 'Verified' => 5],
            ['Date' => '2025-06-02', 'Verified' => 9],
            ['Date' => '2025-06-03', 'Verified' => 6],
        ]);
    }

    public function header(Header $header): Header
    {
        return $header
            ->schema([
                Header\Layout\HeaderColumn::make()
                    ->schema([
                        Image::make('/dukkan-logo.svg'),
                        
                        Header\Layout\HeaderColumn::make()
                            ->schema([
                                Text::make("تقرير الاشتراكات للعملاء")
                                    ->title()
                                    ->primary(),
                                Text::make("هذا التقرير يعرض تفاصيل الاشتراكات للعملاء")
                                    ->subtitle(),
                            ])->alignRight(),
                    
                    ]),
            ]);
    }

    public function body(Body $body): Body
    {
        // Calculate summary stats using real data
        $totalSubscriptions = Subscription::query()->count();
        $activeCount = Subscription::query()->active()->count();
        $canceledCount = Subscription::query()->canceled()->count();
        $incompleteCount = Subscription::query()->incomplete()->count();

        return $body
            ->schema([
                // Summary Section
                Body\Layout\BodyColumn::make()
                    ->schema([
                        Text::make('ملخص الاشتراكات ')
                            ->title()
                            ->primary(),
                        VerticalSpace::make(1),
                        Text::make("إجمالي الاشتراكات: $totalSubscriptions"),
                        Text::make("نشطة: $activeCount "),
                        Text::make("ملغاة: $canceledCount "),
                        Text::make("غير مكتملة: $incompleteCount"),
                    ])->alignRight(),
                VerticalSpace::make(2),
                // Verification Table Section
                Body\Layout\BodyColumn::make()
                    ->schema([
                        Text::make('جدول التحقق')
                            ->subtitle(),
                        Body\Table::make()
                            ->data(
                                fn(?array $filters) => $this->verificationSummary($filters)
                            ),
                    ])->alignRight(),
            ]);
    }

    public function footer(Footer $footer): Footer
    {
        return $footer
            ->schema([
                Footer\Layout\FooterRow::make()
                    ->schema([
                        
                        Footer\Layout\FooterColumn::make()
                            ->schema([
                                Text::make("تاريخ انشاء التقرير: " . now()->format('Y-m-d H:i:s')),
                            ])
                            ->alignRight(),
                    ]),
            ]);
    }

    public function filterForm(Form $form): Form
    {
        return $form
            ->schema([
                // Input::make('search')
                //     ->placeholder('Search')
                //     ->autofocus()
                // //     ->iconLeft('heroicon-o-search'),
                // Select::make('status')
                //     ->placeholder('Status')
                //     ->options([
                //         'active' => 'Active',
                //         'inactive' => 'Inactive',
                //     ]),
            ]);
    }
}
